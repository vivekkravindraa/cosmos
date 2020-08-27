import React from 'react';

import Product from '../Product/Product';
import nikeShoeS from '../../../assets/images/product-component-assets/nikeShoe/nikeShoeS.png';

export default {
  title: 'Molecules/Product',
  component: Product
};

const Template = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  'mode': 'default',
  'id': 1,
  'productTitle': 'Nike Phantom Vision Club....',
  'productImage': nikeShoeS,
  'productCurrency': 'AED',
  'productPrice': '999',
  'productMarketPrice': 'MRP 1299',
  'productRating': '4.0',
  'productVariants': '2+ variants'
};

export const Primary = Template.bind({});
Primary.args = {
  'mode': 'primary',
  'id': 1,
  'productTitle': 'Nike Phantom Vision Club....',
  'productImage': nikeShoeS,
  'productCurrency': 'AED',
  'productPrice': '799',
  'productMarketPrice': 'MRP 1299',
  'productRating': '4.5',
  'productVariants': '2+ variants'
};

export const Secondary = Template.bind({});
Secondary.args = {
  'mode': 'secondary',
  'id': 2,
  'productTitle': 'Nike Phantom Vision Club....',
  'productImage': nikeShoeS,
  'productCurrency': 'AED',
  'productPrice': '499',
  'productMarketPrice': 'MRP 1299',
  'productRating': '5.0',
  'productVariants': '2+ variants',
  'relatedProductImages': [
    nikeShoeS,
    nikeShoeS,
    nikeShoeS,
    nikeShoeS
  ]
};
