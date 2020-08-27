import React from 'react';
import Product from '../../molecules/Product/Product';

export default function Products({ products }) {
    return products.map((product, index) => {
        return (
            <Product
                key={index}
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
    })
}
