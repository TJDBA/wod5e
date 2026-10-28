/**
 * Define all Dice So Nice presets
 * @return {Promise}
 */
export const loadDiceSoNice = async function (dice3d) {
  dice3d.addSystem({ id: 'wod5e', name: 'wod5e' }, true)
  dice3d.addDicePreset(
    {
      type: 'dm',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn-bump.png'
      ],
      colorset: 'black',
      system: 'wod5e'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dv',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn-bump.png'
      ],
      colorset: 'black',
      system: 'wod5e'
    },
    'd10'
  )

  dice3d.addColorset(
    {
      name: 'hunger',
      description: 'V5 Hunger Dice',
      category: 'V5',
      foreground: '#fff',
      background: '#6e0000',
      texture: 'none',
      edge: '#6e0000',
      material: 'plastic',
      font: 'Arial Black',
      fontScale: {
        d6: 1.1,
        df: 2.2,
        dv: 0.8,
        dg: 0.8
      }
    },
    'default'
  )

  dice3d.addDicePreset(
    {
      type: 'dg',
      labels: [
        'systems/wod5e/assets/icons/dsn/bestial-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-crit-dsn.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/bestial-fail-dsn-bump.png',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/red-crit-dsn-bump.png'
      ],
      colorset: 'hunger',
      system: 'wod5e'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dh',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      colorset: 'hunterdice',
      system: 'wod5e'
    },
    'd10'
  )

  dice3d.addColorset(
    {
      name: 'hunterdice',
      description: 'Hunter Dice',
      category: 'V5',
      foreground: '#000000',
      background: '#cb650f',
      texture: 'none',
      edge: '#cb650f',
      material: 'plastic',
      font: 'Arial Black',
      fontScale: {
        d6: 1.1,
        df: 2.2,
        dv: 0.8,
        dg: 0.8,
        dh: 0.7
      }
    },
    'default'
  )

  dice3d.addColorset(
    {
      name: 'desperation',
      description: 'Desperation Dice',
      category: 'V5',
      foreground: '#fff',
      background: '#ee7e1f',
      texture: 'none',
      edge: '#ee7e1f',
      material: 'plastic',
      font: 'Arial Black',
      fontScale: {
        d6: 1.1,
        df: 2.5,
        dv: 0.8,
        dg: 0.8,
        dh: 0.7
      }
    },
    'default'
  )

  dice3d.addDicePreset(
    {
      type: 'ds',
      labels: [
        'systems/wod5e/assets/icons/dsn/desperation-fail-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsnc.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/desperation-fail-dsn-bump.png',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      colorset: 'black',
      system: 'wod5e'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dw',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn-bump.png'
      ],
      colorset: 'werewolf',
      system: 'wod5e'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dr',
      labels: [
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn-bump.png',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn-bump.png'
      ],
      colorset: 'rage',
      system: 'wod5e'
    },
    'd10'
  )

  dice3d.addColorset(
    {
      name: 'werewolf',
      description: 'Werewolf Dice',
      category: 'V5',
      foreground: '#000000',
      background: '#4a5115',
      texture: 'none',
      edge: '#4a5115',
      material: 'plastic',
      font: 'Arial Black'
    },
    'default'
  )

  dice3d.addColorset(
    {
      name: 'rage',
      description: 'Rage Dice',
      category: 'V5',
      foreground: '#000000',
      background: '#820900',
      texture: 'none',
      edge: '#820900',
      material: 'plastic',
      font: 'Arial Black'
    },
    'default'
  )

  dice3d.addSystem({ id: 'vtm5x', name: 'wod5e Custom' }, true)
  dice3d.addDicePreset(
    {
      type: 'dv',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn-bump.png'
      ],
      system: 'vtm5x'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dg',
      labels: [
        'systems/wod5e/assets/icons/dsn/bestial-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-crit-dsn.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/bestial-fail-dsn-bump.png',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/red-crit-dsn-bump.png'
      ],
      system: 'vtm5x'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dh',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      system: 'vtm5x'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'ds',
      labels: [
        'systems/wod5e/assets/icons/dsn/desperation-fail-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsnc.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/desperation-fail-dsn-bump.png',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      system: 'vtm5x'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dw',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn-bump.png'
      ],
      system: 'vtm5x'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dr',
      labels: [
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-brutal-fail-dsn-bump.png',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/werewolf-crit-dsn-bump.png'
      ],
      system: 'vtm5x'
    },
    'd10'
  )

  dice3d.addSystem({ id: 'vtm5y', name: 'wod5e Colors' }, true)
  dice3d.addDicePreset(
    {
      type: 'dv',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-crit-dsn-bump.png'
      ],
      system: 'vtm5y'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dg',
      labels: [
        'systems/wod5e/assets/icons/dsn/bestial-fail-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-crit-dsnc.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/bestial-fail-dsn-bump.png',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/normal-success-dsn-bump.png',
        'systems/wod5e/assets/icons/dsn/red-crit-dsn-bump.png'
      ],
      system: 'vtm5y'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'dh',
      labels: [
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      bumpMaps: [
        '',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      system: 'vtm5y'
    },
    'd10'
  )

  dice3d.addDicePreset(
    {
      type: 'ds',
      labels: [
        'systems/wod5e/assets/icons/dsn/desperation-fail-dsnc.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/red-fail-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsnc.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsnc.png'
      ],
      bumpMaps: [
        'systems/wod5e/assets/icons/dsn/desperation-fail-dsn-bump.png',
        '',
        '',
        '',
        '',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-success-dsn.png',
        'systems/wod5e/assets/icons/dsn/hunter-normal-crit-dsn.png'
      ],
      system: 'vtm5y'
    },
    'd10'
  )

  // ---- Mage (Ascension) Dice So Nice presets ----
  dice3d.addColorset(
    {
      name: 'mage',
      description: 'Mage Dice',
      category: 'V5',
      foreground: '#ffffff',
      background: '#4A154B',
      texture: 'none',
      edge: '#2D0031',
      material: 'plastic',
      font: 'Arial Black'
    },
    'default'
  )

  dice3d.addColorset(
    {
      name: 'paradox',
      description: 'Paradox Dice',
      category: 'V5',
      foreground: '#ffffff',
      background: '#9A0054',
      texture: 'none',
      edge: '#D8005A',
      material: 'plastic',
      font: 'Arial Black'
    },
    'default'
  )

  // Register the Mage basic (da) and Paradox (dp) dice across every wod5e DSN system
  for (const dsnSystem of ['wod5e', 'vtm5x', 'vtm5y']) {
    dice3d.addDicePreset(
      {
        type: 'da',
        labels: [
          'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/normal-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/mage-crit-dsn.png'
        ],
        bumpMaps: [
          '',
          '',
          '',
          '',
          '',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/mage-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/mage-crit-dsn-bump.png'
        ],
        colorset: dsnSystem === 'wod5e' ? 'mage' : undefined,
        system: dsnSystem
      },
      'd10'
    )

    dice3d.addDicePreset(
      {
        type: 'dp',
        labels: [
          'systems/wod5e/assets/icons/dsn/paradox-backlash-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-fail-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn.png',
          'systems/wod5e/assets/icons/dsn/paradox-crit-dsn.png'
        ],
        bumpMaps: [
          'systems/wod5e/assets/icons/dsn/paradox-backlash-dsn-bump.png',
          '',
          '',
          '',
          '',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/paradox-success-dsn-bump.png',
          'systems/wod5e/assets/icons/dsn/paradox-crit-dsn-bump.png'
        ],
        colorset: dsnSystem === 'wod5e' ? 'paradox' : undefined,
        system: dsnSystem
      },
      'd10'
    )
  }
}
