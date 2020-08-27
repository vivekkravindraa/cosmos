import React from 'react';

import ProductVariants from './ProductVariants';

export default {
    title: 'Atoms/ProductVariants',
    component: ProductVariants
};

const Template = (args) => <ProductVariants {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    'variants': '2+ variants'
};