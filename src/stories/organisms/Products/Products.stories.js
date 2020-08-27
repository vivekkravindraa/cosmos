import React from 'react';

import Products from './Products';
import nikeShoeS from '../../../assets/images/product-component-assets/nikeShoe/nikeShoeS.png';

export default {
  title: 'Organisms/Products',
  component: Products
};

const Template = (args) => <Products {...args} />;

export const Primary = Template.bind({});
Primary.args =  {
    'products': [
        {
            'id': 1,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '999',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 2,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '899',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 3,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '799',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 4,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '699',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 5,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '999',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 6,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '899',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 7,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '799',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 8,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '699',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        },
        {
            'id': 9,
            'productTitle': 'Nike Phantom Vision Club....',
            'productImage': nikeShoeS,
            'productCurrency': 'AED',
            'productPrice': '699',
            'productMarketPrice': 'MRP 1299',
            'productRating': '4.5',
            'productVariants': '2+ variants',
            // 'relatedProductImages': [
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS,
            //     nikeShoeS
            // ]
        }
    ]
}