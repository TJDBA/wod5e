import { WOD5eRoll } from '../../../scripts/system-rolls.js'
import { generateRollFormula } from '../../../scripts/rolls/roll-formula.js'

// Options that add dice to a Paradox check. Each checked box adds its value.
const CHECK_OPTIONS = [
  { id: 'optVulgar', key: 'Vulgar', value: 1 },
  { id: 'optWitnesses', key: 'Witnesses', value: 1 },
  { id: 'optReach', key: 'Reach', value: 1 },
  { id: 'optConflict', key: 'ConflictingConsensus', value: 1 },
  { id: 'optParadoxFailure', key: 'ParadoxFailure', value: 3 }
]

/**
 * The Roll Paradox button (the Mage version of the Rouse check).
 *
 * Opens a dialog where the player builds the pool by hand: 1 base die, plus
 * any checked options, plus 1 die per Quintessence entered. All dice roll at
 * once. Each die showing 1-5 is a failure and adds 1 Paradox, up to 5. Any
 * failures that do not fit are listed on the card with a BACKLASH! message.
 * The Paradox score is never lowered by this roll.
 *
 * Runs as a sheet action, so `this.actor` is the mage.
 */
export const _onParadoxCheck = async function (event) {
  event?.preventDefault()

  const actor = this.actor
  if (!actor || actor.type !== 'mage') return

  const dialogData = {
    options: CHECK_OPTIONS.map((option) => ({
      id: option.id,
      value: option.value,
      label: game.i18n.localize(`WOD5E.MTA.${option.key}`)
    }))
  }
  const content = await foundry.applications.handlebars.renderTemplate(
    'systems/wod5e-mta/display/ui/paradox-check-dialog.hbs',
    dialogData
  )

  // Collect what the player picked, or null if they cancelled
  const picked = await foundry.applications.api.DialogV2.wait({
    window: { title: game.i18n.localize('WOD5E.MTA.ParadoxCheck') },
    content,
    actions: {
      plus: (_event, button) => {
        const input = button.ownerDocument.querySelector(`#${button.dataset.resource}`)
        input.valueAsNumber = (input.valueAsNumber || 0) + 1
      },
      minus: (_event, button) => {
        const input = button.ownerDocument.querySelector(`#${button.dataset.resource}`)
        input.valueAsNumber = Math.max((input.valueAsNumber || 0) - 1, 0)
      }
    },
    buttons: [
      {
        action: 'roll',
        icon: 'fas fa-dice',
        label: game.i18n.localize('WOD5E.RollList.Label'),
        default: true,
        callback: (_event, _button, dialog) => readChoices(dialog.element)
      },
      {
        action: 'cancel',
        icon: 'fas fa-times',
        label: game.i18n.localize('WOD5E.Cancel'),
        callback: () => null
      }
    ],
    render: (_event, dialog) => {
      const element = dialog.element
      const refresh = () => {
        const total = readChoices(element).total
        const totalElement = element.querySelector('#paradoxTotal')
        if (totalElement) totalElement.textContent = total
      }
      // Clicks on +/- run their action first, so read the total on the next tick
      element.addEventListener('click', () => setTimeout(refresh, 0))
      element.addEventListener('input', refresh)
      element.addEventListener('change', refresh)
      refresh()
    },
    classes: ['wod5e', 'mage', 'roll-dialog'],
    rejectClose: false
  })

  if (!picked || picked === 'cancel') return

  await rollParadoxCheck(actor, picked)
}

// Read the dialog inputs into a list of chosen options and the total dice
function readChoices(element) {
  const chosen = []
  let total = 1 // The base die is always present

  for (const option of CHECK_OPTIONS) {
    const checkbox = element.querySelector(`#${option.id}`)
    if (checkbox?.checked) {
      chosen.push({ label: game.i18n.localize(`WOD5E.MTA.${option.key}`), value: option.value })
      total += option.value
    }
  }

  const quintessence = Math.max(0, element.querySelector('#inputQuintessence')?.valueAsNumber || 0)
  total += quintessence

  return { chosen, quintessence, total }
}

// Roll the pool, add the failures to Paradox, and post one chat card
async function rollParadoxCheck(actor, { chosen, quintessence, total }) {
  const rollMode = game.settings.get('core', 'rollMode')

  const formula = await generateRollFormula({ basicDice: 0, advancedDice: total, system: 'mage' })
  const roll = await new WOD5eRoll(formula, actor.system, {
    system: 'mage',
    title: game.i18n.localize('WOD5E.MTA.ParadoxCheck'),
    difficulty: 0,
    activeModifiers: [],
    isParadoxCheck: true,
    rollMode
  }).roll()

  // Each die showing 1-5 is a failure
  const dice = (roll.advancedDice?.results ?? []).filter((die) => !die.discarded)
  const failures = dice.filter((die) => die.result < 6).length

  // Add the failures to Paradox, capped at the maximum
  const current = actor.system.paradox.value
  const max = actor.system.paradox.max
  const newScore = Math.min(current + failures, max)
  const leftover = failures - (newScore - current)
  if (newScore !== current) await actor.update({ 'system.paradox.value': newScore })

  // Build the recap and the result lines for the chat card
  const recap = [
    game.i18n.localize('WOD5E.MTA.ParadoxBaseDie'),
    ...chosen.map((option) => `${option.label} (+${option.value})`),
    ...(quintessence > 0
      ? [`${game.i18n.localize('WOD5E.MTA.QuintessenceEmpowerment')} (+${quintessence})`]
      : [])
  ].join(', ')

  let summary = `<div class="paradox-check-summary">
    <p><strong>${game.i18n.localize('WOD5E.MTA.CheckOptions')}:</strong> ${recap}</p>
    <p><strong>${game.i18n.localize('WOD5E.MTA.TotalDice')}:</strong> ${total}</p>
    <p><strong>${game.i18n.localize('WOD5E.MTA.TotalFailures')}:</strong> ${failures}</p>
    <p>${game.i18n.format('WOD5E.MTA.ParadoxIncreasedTo', { score: newScore })}</p>`
  if (leftover > 0) {
    summary += `<p>${game.i18n.format('WOD5E.MTA.LeftoverFailures', { count: leftover })}</p>
    <p><strong>${game.i18n.localize('WOD5E.MTA.BacklashBang')}</strong></p>`
  }
  summary += '</div>'

  roll.options.flavor = summary

  await roll.toMessage({ speaker: ChatMessage.getSpeaker({ actor }) }, { rollMode })
}
