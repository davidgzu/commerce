import { useCallback } from 'react'
import type { MutationHook } from '@commerce/utils/types'
import { CommerceError } from '@commerce/utils/errors'
import useRemoveItem, {
  UseRemoveItem,
} from '@commerce/wishlist/use-remove-item'

import useCustomer from '../customer/use-customer'
import useWishlist from './use-wishlist'

export default useRemoveItem as UseRemoveItem<typeof handler>

export const handler: MutationHook<any, {}, any, any> = {
  fetchOptions: {
    query: '',
  },
  useHook: ({ fetch }) => () => {
    const { data: customer } = useCustomer()
    const { revalidate } = useWishlist()

    return useCallback(
      async function addItem(item) {
        if (!customer) {
          // A signed customer is required in order to have a wishlist
          throw new CommerceError({
            message: 'Signed customer not found',
          })
        }

        await revalidate()
        return null
      },
      [fetch, revalidate, customer]
    )
  },
}
