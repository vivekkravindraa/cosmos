import React from 'react';

import ProductTitle from './ProductTitle';

export default {
  title: 'Atoms/ProductTitle',
  component: ProductTitle
};

const Template = (args) => <ProductTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  'title': 'Nike Phantom Vision Club....'
};
