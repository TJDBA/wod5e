import { WOD5eDice } from '../../../scripts/system-rolls.js'
import { getActiveModifiers } from '../../../scripts/rolls/situational-modifiers.js'

/**
 * A Paradox Check works like a Rouse Check in V5: roll a die, 6+ succeeds and
 * Paradox is unchanged; on a failure the mage gains one more Paradox die.
 * A mage may reroll a number of Paradox dice equal to their Arete.
 *
 * @param {Actor} actor The casting mage
 * @param {Item}  item  The rote/spell being cast (used for the title + cost)
 * @param {string} rollMode The Foundry roll mode
 */
export const _onParadoxCheck = async function (actor, item, rollMode) {
  // Secondary variables
  const cost = item?.system?.cost > 0 ? item.system.cost : 1
  const arete = actor.system?.arete?.value || 0
  const selectors = ['paradox']

  // Apply rollMode from chat if none is set
  if (!rollMode) rollMode = game.settings.get('core', 'rollMode')

  // Only mages roll Paradox checks
  if (actor.type !== 'mage') return

  // Handle getting any situational modifiers
  const activeModifiers = await getActiveModifiers({
    actor,
    selectors
  })

  // Send the roll to the system. Paradox uses the advanced-dice track and
  // increases on a failure, mirroring how Hunger increases on a failed Rouse.
  WOD5eDice.Roll({
    advancedDice: cost + activeModifiers.totalValue,
    title: `${game.i18n.localize('WOD5E.MTA.ParadoxCheck')}${item ? ` - ${item.name}` : ''}`,
    actor,
    disableBasicDice: true,
    // A mage may reroll Paradox dice equal to their Arete
    rerollHunger: arete > 0,
    increaseHunger: true,
    selectors,
    rollMode,
    quickRoll: true
  })
}
