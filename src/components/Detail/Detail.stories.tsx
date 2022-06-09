import React from 'react'
import Detail from './Detail'

export default {
  title: 'Case',
  component: Detail,
}

export const DetailComponent = () => (
  <Detail
    id={1}
    title={'title'}
    body_html='<div>body html</div>'
    image={{
      id: 1,
      alt: 'alt',
      width: 100,
      height: 100,
      src: 'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy.jpg?v=1645622311',
      variant_ids: [42509632241883],
    }}
    images={[
      {
        alt: 'alt',
        height: 999,
        id: 36706924069083,
        src: 'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy.jpg?v=1645622311',
        variant_ids: [42509632241883],
        width: 739,
      },
    ]}
    options={[
      {
        id: 9606278086875,
        name: 'Size',
        position: 1,
        values: ['163cm'],
      },
    ]}
    variants={[
      {
        compare_at_price: '500.00',
        id: 42509632241883,
        image_id: 36706924069083,
        price: '299.00',
        title: '163cm',
      },
    ]}
    closeModal={() => void 0}
  />
)
