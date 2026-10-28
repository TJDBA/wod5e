export const prepareFocusContext = async function (context, item) {
  const itemData = item.system

  // Tab data
  context.tab = context.tabs.focus

  // Part-specific data
  context.focus = itemData.focus
  context.enrichedFocus = await foundry.applications.ux.TextEditor.implementation.enrichHTML(
    itemData.focus
  )

  return context
}
