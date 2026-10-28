const fields = foundry.data.fields

export function mageFields() {
  return {
    // Paradox is the Mage's advanced-dice resource (0-5), used directly in
    // dice pools the way Hunger is for Vampire.
    paradox: new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 }),
      max: new fields.NumberField({ initial: 5 }),
      // Permanent Paradox cannot be reduced below by Grounding/absorbing
      permanent: new fields.NumberField({ initial: 0 })
    }),

    // Arete is the Mage's power rating (akin to Blood Potency). It limits the
    // level of Spheres and how much Quintessence can be channeled.
    arete: new fields.SchemaField({
      value: new fields.NumberField({ initial: 1 })
    }),

    // Quintessence: the raw fabric of creation spent to empower/counter spells.
    quintessence: new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 }),
      max: new fields.NumberField({ initial: 0 })
    }),

    // Hubris acts as the Mage degeneration/corruption track (akin to Humanity).
    // Quiet is tracked alongside it as the "stains"-equivalent; at 6 the
    // character becomes an unplayable NPC.
    hubris: new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 }),
      quiet: new fields.NumberField({ initial: 0 }),
      // The type of Quiet currently afflicting the mage (Resonance type)
      quietType: new fields.StringField({ initial: '' })
    }),

    // Avatar rating / Essence descriptor
    avatar: new fields.SchemaField({
      value: new fields.NumberField({ initial: 1 })
    }),
    essence: new fields.StringField({ initial: '' }),

    // Resonance: the flavour of a mage's magick (free-form traits)
    resonance: new fields.ArrayField(new fields.ObjectField()),

    // Synergy flag used during advanced-dice rolls
    backlashActive: new fields.BooleanField({ initial: false }),

    selectedSphere: new fields.StringField({ initial: '' }),
    selectedSphereRote: new fields.StringField({ initial: '' }),

    // Spheres container, populated during data prep from the Spheres definition
    spheres: new fields.ObjectField({
      initial: {},
      validate: false
    })
  }
}
