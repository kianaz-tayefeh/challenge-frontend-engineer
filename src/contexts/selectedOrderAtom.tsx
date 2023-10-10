import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { OrderType } from '~/interfaces'

const storage = createJSONStorage<OrderType | null>(() => sessionStorage)
export const selectedOrderAtom = atomWithStorage<OrderType | null>('selected-order', null, storage)
