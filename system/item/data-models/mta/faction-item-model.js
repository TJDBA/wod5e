import { WoDItemModel } from '../base-item-model.js'

export class FactionItemModel extends WoDItemModel {
  static defineSchema() {
    const fields = foundry.data.fields

    const schema = super.defineSchema()

    // A faction's signature practice/focus text (Tradition, Convention or Craft)
    schema.focus = new fields.HTMLField({ initial: '' })

    return schema
  }
}
