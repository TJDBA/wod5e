/** Handle adding a new sphere to the sheet */
export const _onAddSphere = async function (event) {
  event.preventDefault()

  // Top-level variables
  const actor = this.actor

  // Secondary variables
  const sphereList = WOD5E.Spheres.getList({})

  // Build the options for the select dropdown
  const content = new foundry.data.fields.StringField({
    choices: sphereList,
    label: game.i18n.localize('WOD5E.MTA.SelectSphere'),
    required: true
  }).toFormGroup(
    {},
    {
      name: 'sphere'
    }
  ).outerHTML

  // Prompt a dialog to determine which sphere we're adding
  const sphereSelected = await foundry.applications.api.DialogV2.prompt({
    window: {
      title: game.i18n.localize('WOD5E.MTA.AddSphere')
    },
    classes: ['wod5e', 'dialog', 'mage', 'dialog'],
    content,
    ok: {
      callback: (event, button) =>
        new foundry.applications.ux.FormDataExtended(button.form).object.sphere
    },
    modal: true
  })

  if (sphereSelected) {
    // Make the sphere visible
    actor.update({ [`system.spheres.${sphereSelected}.visible`]: true })

    // Update the currently selected sphere and rote
    _updateSelectedSphere(actor, sphereSelected)
    _updateSelectedSphereRote(actor, '')
  }
}

/** Handle removing a sphere from an actor */
export const _onRemoveSphere = async function (event, target) {
  event.preventDefault()

  // Top-level variables
  const actor = this.actor
  const sphere = target.getAttribute('data-sphere')

  actor.update({
    [`system.spheres.${sphere}.visible`]: false
  })
}

/** Post Sphere description to the chat */
export const _onSphereToChat = async function (event, target) {
  event.preventDefault()

  // Top-level variables
  const actor = this.actor
  const sphere = actor.system.spheres[target.getAttribute('data-sphere')]

  foundry.documents.ChatMessage.implementation.create({
    flags: {
      wod5e: {
        name: sphere.displayName,
        img: 'icons/svg/dice-target.svg',
        description: sphere?.description
      }
    }
  })
}

/** Select a sphere to display */
export const _onSelectSphere = async function (event, target) {
  event.preventDefault()

  // Top-level variables
  const actor = this.actor
  const sphere = target.getAttribute('data-sphere')

  _updateSelectedSphere(actor, sphere)
}

/** Select a rote to display */
export const _onSelectSphereRote = async function (event, target) {
  event.preventDefault()

  // Top-level variables
  const actor = this.actor
  const rote = target.getAttribute('data-rote')

  _updateSelectedSphereRote(actor, rote)
}

export const _updateSelectedSphereRote = async function (actor, rote) {
  // Variables yet to be defined
  const updatedData = {}

  // Make sure we actually have a valid rote defined
  if (rote && actor.items.get(rote)) {
    const roteItem = actor.items.get(rote)
    const sphere = roteItem.system.sphere

    // Update the selected rote
    updatedData.selectedSphereRote = rote
    roteItem.update({
      system: {
        selected: true
      }
    })

    // Update the selected spheres
    _updateSelectedSphere(actor, sphere)
  } else {
    // Revert to an empty string
    updatedData.selectedSphereRote = ''
  }

  // Unselect the previously selected rote
  const previouslySelectedRote = actor.system?.selectedSphereRote
  if (
    previouslySelectedRote &&
    actor.items.get(previouslySelectedRote) &&
    previouslySelectedRote !== rote
  ) {
    actor.items.get(previouslySelectedRote).update({
      system: {
        selected: false
      }
    })
  }

  // Update the actor data
  actor.update({
    system: updatedData
  })
}

export const _updateSelectedSphere = async function (actor, sphere) {
  // Variables yet to be defined
  const updatedData = {}

  // Make sure we actually have a sphere defined
  if (sphere && actor.system.spheres[sphere]) {
    updatedData.spheres ??= {}
    updatedData.spheres[sphere] ??= {}

    // Update the selected spheres
    updatedData.selectedSphere = sphere
    updatedData.spheres[sphere].selected = true
  } else {
    // Revert to an empty string
    updatedData.selectedSphere = ''
  }

  // Unselect the previously selected sphere
  const previouslySelectedSphere = actor.system?.selectedSphere
  if (previouslySelectedSphere && previouslySelectedSphere !== sphere) {
    updatedData.spheres ??= {}
    updatedData.spheres[previouslySelectedSphere] ??= {}
    updatedData.spheres[previouslySelectedSphere].selected = false
  }

  // Update the actor data
  actor.update({
    system: updatedData
  })
}
