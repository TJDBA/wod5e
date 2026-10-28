import { prepareSphereRotes } from './prepare-data.js'

export const prepareSpheresContext = async function (context, actor) {
  const actorData = actor.system

  // Tab data
  context.tab = context.tabs.spheres

  // Part-specific data
  context.spheres = await prepareSphereRotes(actorData.spheres)

  // Get sphere data if any sphere is currently selected
  if (actorData?.selectedSphere) {
    context.selectedSphere = actorData.spheres[actorData.selectedSphere]
    context.enrichedSelectedSphereDescription =
      await foundry.applications.ux.TextEditor.implementation.enrichHTML(
        context.selectedSphere?.description || ''
      )
  }

  // Get rote data if any rote is currently selected
  if (actorData?.selectedSphereRote) {
    context.selectedSphereRote = await actor.items.get(actorData.selectedSphereRote)

    if (context.selectedSphereRote?.system?.description) {
      context.selectedSphereRoteDescription =
        await foundry.applications.ux.TextEditor.implementation.enrichHTML(
          context.selectedSphereRote.system.description
        )
    }
  }

  return context
}

export const prepareAvatarContext = async function (context, actor) {
  const actorData = actor.system
  const actorHeaders = actorData.headers

  // Tab data
  context.tab = context.tabs.avatar

  // Filters for item-specific data
  const factionFilter = actor.items.filter((item) => item.type === 'faction')

  // Part-specific data
  context.arete = actorData.arete
  context.quintessence = actorData.quintessence
  context.paradox = actorData.paradox
  context.hubris = actorData.hubris
  context.avatar = actorData.avatar
  context.essence = actorData.essence
  context.resonance = actorData.resonance
  context.affiliation = actorHeaders.affiliation
  context.sect = actorHeaders.sect
  context.paradigm = actorHeaders.paradigm
  context.practice = actorHeaders.practice
  context.faction = factionFilter[0]

  return context
}
