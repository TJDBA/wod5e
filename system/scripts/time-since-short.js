export function timeSinceShort(timeStamp) {
  timeStamp = new Date(timeStamp)
  const now = new Date()
  const seconds = (now - timeStamp) / 1000
  const components = game.time.earthCalendar.timeToComponents(seconds)

  // Cross-version: V14 registers the 'duration' formatter; V13 uses 'ago'.
  // Try the V14 form first, fall back to the V13 form so this runs on both.
  let formatted
  try {
    formatted = game.time.earthCalendar.format(components, 'duration', {
      short: true,
      separator: ' ',
      maxTerms: 1
    })
  } catch (e) {
    formatted = null
  }

  if (formatted === null || formatted === undefined) {
    // V13 path: the 'ago' formatter already wraps the "X ago" string itself.
    return game.time.earthCalendar.format(components, 'ago', {
      short: true,
      separator: ' ',
      maxTerms: 1
    })
  }

  // V14 path: 'duration' returns the bare span, wrap it like the V14 build did.
  if (formatted) {
    return game.i18n.format('WOD5E.StringAgo', {
      string: formatted
    })
  } else {
    return game.i18n.localize('WOD5E.Now')
  }
}
