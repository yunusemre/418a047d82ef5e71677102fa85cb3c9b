import React from 'react'
import Thumbs from './Thumbs'

export default {
  title: 'Case',
  component: Thumbs,
}

export const ThumbsComponent = () => (
  <Thumbs
    variants={[
      {
        id: 42509632241883,
        title: '163cm',
        price: '299.00',
        compare_at_price: '500.00',
        image_id: 36706924069083,
      },
    ]}
    images={[
      {
        id: 36706924069083,
        alt: 'alt',
        width: 739,
        height: 999,
        src: 'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy.jpg?v=1645622311',
        variant_ids: [42509632241883],
      },
    ]}
    change={() => void 0}
  />
)
