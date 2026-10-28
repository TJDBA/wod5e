import { Spheres } from '../../../api/def/spheres.js'

export const prepareSpheres = async function (actor) {
  // Secondary variables
  const spheresList = Spheres.getList({})
  const actorSpheres = actor.system?.spheres
  const computedSpheres = {}

  for (const [id, value] of Object.entries(spheresList)) {
    let sphereData = {}

    // If the actor has a sphere with the key, grab its current values
    if (Object.prototype.hasOwnProperty.call(actorSpheres, id)) {
      sphereData = Object.assign(
        {
          id,
          value: actorSpheres[id].value || 0,
          rotes: actorSpheres[id].rotes || [],
          description: actorSpheres[id]?.description || '',
          visible: actorSpheres[id].visible,
          selected: actorSpheres[id].selected || false
        },
        value
      )
    } else {
      // Otherwise, add it to the actor and set it as some default data
      sphereData = Object.assign(
        {
          id,
          value: 0,
          visible: false,
          description: '',
          rotes: [],
          selected: false
        },
        value
      )
    }

    // Ensure the sphere exists
    if (!computedSpheres[id]) computedSpheres[id] = {}
    // Apply the sphere's data
    computedSpheres[id] = sphereData

    // Make it forced invisible if it's set to hidden
    if (sphereData.hidden) {
      computedSpheres[id].visible = false
    }

    // Assign all matching rotes to the sphere
    computedSpheres[id].rotes = actor.items.filter(
      (item) => item.type === 'rote' && item.system.sphere === id
    )
  }

  return computedSpheres
}

export const prepareSphereRotes = async function (spheres) {
  for (const sphereType in spheres) {
    if (Object.prototype.hasOwnProperty.call(spheres, sphereType)) {
      const sphere = spheres[sphereType]

      if (sphere && Array.isArray(sphere.rotes)) {
        // Check if the sphere has rotes
        if (sphere.rotes.length > 0) {
          // Ensure visibility is set correctly
          if (!sphere.visible && !sphere.hidden) sphere.visible = true

          // Sort the sphere containers by the level of the rote
          sphere.rotes = sphere.rotes.sort(function (rote1, rote2) {
            // Ensure rote1 and rote2 have the necessary properties
            const level1 = rote1.system ? rote1.system.level : 0
            const level2 = rote2.system ? rote2.system.level : 0

            // If levels are the same, sort alphabetically instead
            if (level1 === level2) {
              return rote1.name.localeCompare(rote2.name)
            }

            // Sort by level
            return level1 - level2
          })
        }
      } else {
        console.warn(
          `World of Darkness 5e | Sphere ${sphereType} is missing or rotes is not an array.`
        )
      }
    }
  }

  return spheres
}
