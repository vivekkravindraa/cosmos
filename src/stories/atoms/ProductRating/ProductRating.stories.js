import React from 'react';

import ProductRating from './ProductRating';
import cosmosRating from '../../../assets/images/product-component-assets/cosmosRating/cosmosRating.png';

export default {
    title: 'Atoms/ProductRating',
    component: ProductRating
};

const Template = (args) => <ProductRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    'rating': '4.2',
    'src': cosmosRating
};
