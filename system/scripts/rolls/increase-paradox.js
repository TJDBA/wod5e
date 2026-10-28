export async function _increaseParadox(actor, amount, rollMode) {
  // Automatically add Paradox to the actor on a failure (for Paradox checks)
  const paradoxMax = actor.system.paradox.max
  const currentParadox = actor.system.paradox.value
  const newParadoxAmount = Math.min(currentParadox + amount, paradoxMax)

  // If no rollMode is provided, use the user's default
  if (!rollMode) rollMode = game.settings.get('core', 'rollMode')

  // If the actor is already at max Paradox, send a message in the chat to warn
  // them that reality is about to backlash
  if (amount > 0 && currentParadox >= paradoxMax) {
    foundry.documents.ChatMessage.implementation.create({
      flags: {
        wod5e: {
          name: game.i18n.localize('WOD5E.MTA.ParadoxFull1'),
          img: 'systems/wod5e/assets/icons/dice/mage/paradox-failure.png',
          description: game.i18n.localize('WOD5E.MTA.ParadoxFull2')
        }
      }
    })
  }

  // Update the actor with the new amount of Paradox
  actor.update({ 'system.paradox.value': newParadoxAmount })
}
