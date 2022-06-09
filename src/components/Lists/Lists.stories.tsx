import React from 'react'
import ProductLists from './Lists'

export default {
  title: 'Case',
  component: ProductLists,
}

export const ProductListsComponent = () => (
  <ProductLists
    data={[
      {
        id: 7550807507163,
        title: '12 Ti Xelium Skis',
        body_html:
          '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p>\n<ul>\n<li><span style="line-height: 1.2;">POWER TURN ROCKER</span></li>\n<li><span style="line-height: 1.2;">EASYDRIVE SIDECUTS</span></li>\n<li><span style="line-height: 1.2;">CAP 3D TOPSHEET</span></li>\n<li><span style="line-height: 1.2;">COMPOSITE CORE</span></li>\n<li><span style="line-height: 1.2;">FIBERGLASS</span></li>\n<li><span style="line-height: 1.2;">TI</span></li>\n<li><span style="line-height: 1.2;">XELIUM</span></li>\n</ul>\n<meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8">\n<p> </p>',
        variants: [
          {
            id: 42509632241883,
            title: '163cm',
            price: '299.00',
            compare_at_price: '500.00',
            image_id: 36706924069083,
          },
        ],
        options: [
          {
            id: 9606278086875,
            name: 'Size',
            position: 1,
            values: ['163cm'],
          },
        ],
        images: [
          {
            id: 36706924069083,
            alt: 'alt',
            width: 739,
            height: 999,
            src: 'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy.jpg?v=1645622311',
            variant_ids: [42509632241883],
          },
        ],
        image: {
          id: 36706924069083,
          alt: 'alt',
          width: 739,
          height: 999,
          src: 'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy.jpg?v=1645622311',
          variant_ids: [42509632241883],
        },
      },
    ]}
  />
)
