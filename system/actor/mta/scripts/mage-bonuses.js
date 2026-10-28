/**
 * Arete is the Mage's measure of enlightenment. A higher Arete lends power to
 * a mage's magick, so it contributes bonus dice to Sphere (spellcasting) rolls,
 * the same way Blood Potency boosts Discipline powers for a Vampire.
 *
 * The bonus scales modestly: +1 die at Arete 3-4, +2 at Arete 5-6, +3 at 7+.
 */
export const getMageModifiers = async function (actorData) {
  const arete = actorData?.arete?.value || 0

  let aretePower = 0
  if (arete >= 7) {
    aretePower = 3
  } else if (arete >= 5) {
    aretePower = 2
  } else if (arete >= 3) {
    aretePower = 1
  }

  const bonuses = [
    {
      source: game.i18n.localize('WOD5E.MTA.Arete'),
      value: aretePower,
      paths: ['spheres'],
      activeWhen: {
        check: 'always'
      }
    }
  ]

  return bonuses
}
