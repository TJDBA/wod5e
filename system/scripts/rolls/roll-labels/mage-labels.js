import { getBaseLabel } from './base-labels.js'

export const getMageLabel = async function (data) {
  const difficultySet = data.difficulty > 0
  const labelData = {
    showTotalAndDifficulty: true,
    labelClass: '',
    labelText: ''
  }

  // The Paradox check only reports failures and the new Paradox score on its own
  // chat card, so it shows no result label.
  if (data.isParadoxCheck) {
    labelData.showTotalAndDifficulty = false
    return labelData
  }

  // Paradox Critical: the roll is a critical (two or more 10s) and at least one
  // of the 10s is on a Paradox die
  const paradoxCritical =
    data.advancedDice?.criticals > 1 ||
    (data.basicDice?.criticals > 0 && data.advancedDice?.criticals > 0)

  // A 1 on any Paradox die
  const paradoxOne = data.advancedDice?.critFails > 0

  // Paradox Failure: the roll fails and a Paradox die shows a 1
  const paradoxFailure = paradoxOne && (!difficultySet || data.totalResult < data.difficulty)

  if (paradoxCritical) {
    Object.assign(labelData, getParadoxLabel('ParadoxCritical', difficultySet))
  } else if (paradoxFailure) {
    Object.assign(labelData, getParadoxLabel('ParadoxFailure', difficultySet))
  } else {
    // Default to the base label generator otherwise
    Object.assign(labelData, await getBaseLabel(data, difficultySet))
  }

  // Potential Backlash: shown once (never one per condition) when the Paradox
  // score is 5 and either a Paradox Critical or a 1 on a Paradox die happened
  if (data.paradoxScore === 5 && (paradoxCritical || paradoxOne)) {
    labelData.labelText += `<div class="potential-backlash"><strong>${game.i18n.localize(
      'WOD5E.MTA.PotentialBacklash'
    )}</strong></div>`
  }

  return labelData
}

// Paradox Critical and Paradox Failure replace the messy critical and bestial
// failure labels of the vampire sheet
function getParadoxLabel(key, difficultySet) {
  const labelClass = key === 'ParadoxCritical' ? 'messy-critical' : 'bestial-failure'
  const labelText = game.i18n.localize(
    difficultySet ? `WOD5E.MTA.${key}` : `WOD5E.MTA.Possible${key}`
  )

  return { labelClass, labelText }
}
