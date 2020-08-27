import React from 'react';

import ProductPrice from '../../atoms/ProductPrice/ProductPrice';
import ProductMarketPrice from '../../atoms/ProductMarketPrice/ProductMarketPrice';
import ProductTitle from '../../atoms/ProductTitle/ProductTitle';
import ProductRating from '../../atoms/ProductRating/ProductRating';
import ProductVariants from '../../atoms/ProductVariants/ProductVariants';

import cosmosRating from '../../../assets/images/product-component-assets/cosmosRating/cosmosRating.png';

export default function Product({
    productImage,
    relatedProductImages,
    productCurrency,
    productPrice,
    productMarketPrice,
    productTitle,
    productRating,
    productVariants
}) {
    return (
        <div className="product">
            <div className="productImages">
                <div className="productImage">
                    <img src={productImage} alt="noImage" />
                </div>
                <div className="relatedProductImages">
                    {relatedProductImages && relatedProductImages.map((image, index) => {
                        return <div key={index}>
                            <img src={image} alt="noImage" height="40px" />
                        </div>
                    })}
                </div>
            </div>
            <div className="productInfo">
                <div className="productPrices">
                    <div className="productPrice">
                        <ProductPrice currency={productCurrency} price={productPrice} />
                    </div>
                    <div className="productMarketPrice">
                        <ProductMarketPrice price={productMarketPrice} />
                    </div>
                </div>
                <div className="productTitle">
                    <ProductTitle title={productTitle} />
                </div>
                <div className="productRatingAndVariants">
                    <div className="productRating">
                        <ProductRating rating={productRating} src={cosmosRating}  />
                    </div>
                    <div className="productVariants">
                        <ProductVariants variants={productVariants} />
                    </div>
                </div>
            </div>
        </div>
    )
};
