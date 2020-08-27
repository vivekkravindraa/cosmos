import React from 'react';

import ProductMarketPrice from './ProductMarketPrice';

export default {
  title: 'Atoms/ProductMarketPrice',
  component: ProductMarketPrice
};

const Template = (args) => <ProductMarketPrice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  'price': 'MRP 1299'
};
