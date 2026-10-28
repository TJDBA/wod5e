import { getBaseLabel } from './base-labels.js'

export const getMageLabel = async function (data) {
  const difficultySet = data.difficulty > 0
  const labelData = {
    showTotalAndDifficulty: true,
    labelClass: '',
    labelText: ''
  }

  // Handle vulgar criticals (an advanced-dice critical, Paradox dice showing a 10)
  if (
    data.advancedDice?.criticals > 1 ||
    (data.basicDice?.criticals > 0 && data.advancedDice?.criticals > 0)
  ) {
    Object.assign(labelData, getVulgarCriticalLabel(data, difficultySet))
  } else if (
    data.advancedDice?.critFails > 0 &&
    (!difficultySet || data.totalResult < data.difficulty)
  ) {
    // Handle Paradox backlash (a 1 on a Paradox die on a failed roll)
    Object.assign(labelData, getBacklashLabel(data, difficultySet))
  } else {
    // Default to the base label generator otherwise
    Object.assign(labelData, await getBaseLabel(data, difficultySet))
  }

  return labelData
}

// A vulgar critical: the magick warps reality openly
function getVulgarCriticalLabel(data, difficultySet) {
  let labelClass, labelText

  if (difficultySet) {
    labelClass = 'messy-critical'
    labelText = game.i18n.localize('WOD5E.MTA.VulgarCritical')
  } else {
    labelClass = 'messy-critical'
    labelText = game.i18n.localize('WOD5E.MTA.PossibleVulgarCritical')
  }

  return { labelClass, labelText }
}

// A Paradox backlash: reality rebels against the Mage
function getBacklashLabel(data, difficultySet) {
  let labelClass, labelText

  if (difficultySet) {
    labelClass = 'bestial-failure'
    labelText = game.i18n.localize('WOD5E.MTA.ParadoxBacklash')
  } else {
    labelClass = 'bestial-failure'
    labelText = game.i18n.localize('WOD5E.MTA.PossibleParadoxBacklash')
  }

  return { labelClass, labelText }
}
