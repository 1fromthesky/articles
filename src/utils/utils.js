import { OrderedMap } from 'immutable'

export const arrToMap = (arr, itemRecord) => {
  return arr.reduce(
    (acc, item) => acc.set(item.id, itemRecord ? new itemRecord(item) : item),
    new OrderedMap()
  )
}
