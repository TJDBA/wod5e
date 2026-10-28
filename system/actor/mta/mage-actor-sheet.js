import { prepareSpheresContext, prepareAvatarContext } from './scripts/prepare-partials.js'
// Various button functions
import {
  _onAddSphere,
  _onSphereToChat,
  _onRemoveSphere,
  _onSelectSphere,
  _onSelectSphereRote
} from './scripts/spheres.js'
import { _onHubrisRoll } from './scripts/roll-hubris.js'
// Base actor sheet to extend from
import { WoDActorBase } from '../wod-actor-base.js'
// Mixin
const { HandlebarsApplicationMixin } = foundry.applications.api

/**
 * Extend the WoDActorBase document
 * @extends {WoDActorBase}
 */
export class MageActorSheet extends HandlebarsApplicationMixin(WoDActorBase) {
  static DEFAULT_OPTIONS = {
    classes: ['wod5e', 'actor', 'sheet', 'mage'],
    actions: {
      addSphere: _onAddSphere,
      removeSphere: _onRemoveSphere,
      sphereChat: _onSphereToChat,
      selectSphere: _onSelectSphere,
      selectSphereRote: _onSelectSphereRote,
      hubrisRoll: _onHubrisRoll
    }
  }

  static PARTS = {
    header: {
      template: 'systems/wod5e/display/mta/actors/mage-sheet.hbs'
    },
    tabs: {
      template: 'systems/wod5e/display/shared/actors/parts/tab-navigation.hbs'
    },
    stats: {
      template: 'systems/wod5e/display/shared/actors/parts/stats.hbs'
    },
    experience: {
      template: 'systems/wod5e/display/shared/actors/parts/experience.hbs'
    },
    spheres: {
      template: 'systems/wod5e/display/mta/actors/parts/spheres.hbs'
    },
    avatar: {
      template: 'systems/wod5e/display/mta/actors/parts/avatar.hbs'
    },
    features: {
      template: 'systems/wod5e/display/shared/actors/parts/features.hbs'
    },
    equipment: {
      template: 'systems/wod5e/display/shared/actors/parts/equipment.hbs'
    },
    biography: {
      template: 'systems/wod5e/display/shared/actors/parts/biography.hbs'
    },
    notepad: {
      template: 'systems/wod5e/display/shared/actors/parts/notepad.hbs'
    },
    settings: {
      template: 'systems/wod5e/display/shared/actors/parts/actor-settings.hbs'
    },
    banner: {
      template: 'systems/wod5e/display/shared/actors/parts/type-banner.hbs'
    },
    limited: {
      template: 'systems/wod5e/display/shared/actors/limited-sheet.hbs'
    }
  }

  tabs = {
    stats: {
      id: 'stats',
      group: 'primary',
      title: 'WOD5E.Tabs.Stats',
      icon: '<i class="fa-regular fa-chart-line"></i>'
    },
    experience: {
      id: 'experience',
      group: 'primary',
      title: 'WOD5E.Tabs.Experience',
      icon: '<i class="fa-solid fa-file-contract"></i>'
    },
    spheres: {
      id: 'spheres',
      group: 'primary',
      title: 'WOD5E.MTA.Spheres',
      icon: '<i class="fa-solid fa-atom"></i>'
    },
    avatar: {
      id: 'avatar',
      group: 'primary',
      title: 'WOD5E.MTA.Avatar',
      icon: '<i class="fa-solid fa-hand-sparkles"></i>'
    },
    features: {
      id: 'features',
      group: 'primary',
      title: 'WOD5E.Tabs.Features',
      icon: '<i class="fas fa-gem"></i>'
    },
    equipment: {
      id: 'equipment',
      group: 'primary',
      title: 'WOD5E.Tabs.Equipment',
      icon: '<i class="fa-solid fa-toolbox"></i>'
    },
    biography: {
      id: 'biography',
      group: 'primary',
      title: 'WOD5E.Tabs.Biography',
      icon: '<i class="fas fa-id-card"></i>'
    },
    notepad: {
      id: 'notepad',
      group: 'primary',
      title: 'WOD5E.Tabs.Notes',
      icon: '<i class="fas fa-sticky-note"></i>'
    },
    settings: {
      id: 'settings',
      group: 'primary',
      title: 'WOD5E.Tabs.Settings',
      icon: '<i class="fa-solid fa-gears"></i>'
    }
  }

  async _prepareContext() {
    // Top-level variables
    const data = await super._prepareContext()
    const actor = this.actor
    const actorData = actor.system
    const actorHeaders = actorData.headers

    // Filters for item-specific data
    const factionFilter = actor.items.filter((item) => item.type === 'faction')

    // Prepare mage-specific items
    data.paradox = actorData.paradox
    data.arete = actorData.arete
    data.quintessence = actorData.quintessence
    data.hubris = actorData.hubris
    data.faction = factionFilter[0]
    data.affiliation = actorHeaders.affiliation

    return data
  }

  async _preparePartContext(partId, context, options) {
    // Inherit any preparation from the extended class
    context = { ...(await super._preparePartContext(partId, context, options)) }

    // Top-level variables
    const actor = this.actor

    // Prepare each page context
    switch (partId) {
      case 'stats':
        return this.prepareStatsContext(context, actor)

      case 'experience':
        return this.prepareExperienceContext(context, actor)

      case 'spheres':
        return prepareSpheresContext(context, actor)

      case 'avatar':
        return prepareAvatarContext(context, actor)

      case 'features':
        return this.prepareFeaturesContext(context, actor)

      case 'equipment':
        return this.prepareEquipmentContext(context, actor)

      case 'biography':
        return this.prepareBiographyContext(context, actor)

      case 'notepad':
        return this.prepareNotepadContext(context, actor)

      case 'settings':
        return this.prepareSettingsContext(context, actor)

      case 'limited':
        return this.prepareLimitedContext(context, actor)
    }

    return context
  }
}
