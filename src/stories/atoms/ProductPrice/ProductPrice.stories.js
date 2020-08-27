import React from 'react';

import ProductPrice from './ProductPrice';

export default {
  title: 'Atoms/ProductPrice',
  component: ProductPrice
};

const Template = (args) => <ProductPrice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  'currency': 'AED',
  'price': '999'
};
