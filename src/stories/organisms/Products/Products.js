import React from 'react';

import Product from '../../molecules/Product/Product';

import './Products.scss';

export default function Products({ products }) {
    return <div className="cosmos-products">
        {products.map((product, index) => {
            return (
                <Product
                    index={index}
                    productImage={product.productImage}
                    relatedProductImages={product.relatedProductImages}
                    productCurrency={product.productCurrency}
                    productPrice={product.productPrice}
                    productMarketPrice={product.productMarketPrice}
                    productTitle={product.productTitle}
                    productRating={product.productRating}
                    productVariants={product.productVariants}
                />
            )
        })}
    </div>
}