import { WoDItemModel } from '../base-item-model.js'
import { dicepoolFields } from '../fields/dicepool-fields.js'

export class RoteItemModel extends WoDItemModel {
  static defineSchema() {
    const fields = foundry.data.fields

    const schema = super.defineSchema()

    schema.level = new fields.NumberField({ initial: 0 })
    schema.cost = new fields.NumberField({ initial: 0 })

    // Which dice are in the item
    Object.assign(schema, dicepoolFields())

    // The sphere this rote belongs to
    schema.sphere = new fields.StringField({ initial: 'correspondence' })
    schema.selected = new fields.BooleanField({ initial: false })

    return schema
  }
}
