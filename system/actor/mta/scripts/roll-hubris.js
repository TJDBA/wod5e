import { getActiveModifiers } from '../../../scripts/rolls/situational-modifiers.js'
import { WOD5eDice } from '../../../scripts/system-rolls.js'

/**
 * Handle rolling a Hubris check (the Mage degeneration check, analogous to a
 * Vampire Remorse roll). Hubris + Quiet together form the Mage's corruption
 * track; failing a Hubris check raises the mage's Hubris by 1.
 */
export const _onHubrisRoll = async function (event) {
  event.preventDefault()

  // Top-level variables
  const actor = this.actor

  // Secondary variables
  const hubris = actor.system.hubris.value
  const quiet = actor.system.hubris.quiet
  const selectors = ['hubris']

  // Handle getting any situational modifiers
  const activeModifiers = await getActiveModifiers({
    actor,
    selectors
  })

  // Dice pool is 10, minus current Hubris, minus current Quiet, plus any active
  // modifiers. Minimum of 1 die, mirroring the Remorse roll.
  const dicePool = Math.max(10 - hubris - quiet + activeModifiers.totalValue, 1)

  WOD5eDice.Roll({
    basicDice: dicePool,
    title: game.i18n.localize('WOD5E.MTA.RollingHubris'),
    selectors,
    actor,
    data: actor.system,
    disableAdvancedDice: true,
    callback: async (err, rollData) => {
      if (err) console.log('World of Darkness 5e | ' + err)

      const hasSuccess = rollData.terms[0].results.some((result) => result.success)

      // On a success, clear accumulated Quiet; on a failure, raise Hubris by 1
      if (hasSuccess) {
        await actor.update({ 'system.hubris.quiet': 0 })
      } else {
        await actor.update({
          'system.hubris.value': Math.min(hubris + 1, 6),
          'system.hubris.quiet': 0
        })

        foundry.documents.ChatMessage.implementation.create({
          flags: {
            wod5e: {
              name: game.i18n.localize('WOD5E.MTA.HubrisFailed'),
              img: 'systems/wod5e/assets/icons/dice/mage/paradox-failure.png',
              description: game.i18n.format('WOD5E.MTA.HubrisFailedDescription', {
                actor: actor.name
              })
            }
          }
        })
      }
    }
  })
}
