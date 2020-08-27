import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { Icon } from '../../../building-blocks/atoms/Icon/Icon';
import { Label } from '../../../building-blocks/atoms/Label/Label';

import { featuredProducts } from '../../../mocks/product-component-mocks/ProductJsonData';

import cosmosLeftArrow from '../../../assets/images/home-component-assets/cosmosLeftArrow/cosmosLeftArrow.png';
import cosmosRightArrow from '../../../assets/images/home-component-assets/cosmosRightArrow/cosmosRightArrow.png';

import '../../../assets/styles/product-component-styles/CosmosFeaturedProducts.scss';

export default function CosmosFeaturedProducts() {
    const handleScrollLeft = (e) => {
        document.getElementById('featuredProductsContainer').scrollLeft -= 100;
    }

    const handleScrollRight = (e) => {
        document.getElementById('featuredProductsContainer').scrollLeft += 100;
    }

    return (
        <div className="featuredProductsWrapper">
            <Label label={'Featured Products'} />
            <div className="featuredProductsContainer" id="featuredProductsContainer">
                <Products products={featuredProducts.slice(0,12)} />
            </div>
            <div className="featuredProductsLeftArrow" onClick={(e) => handleScrollLeft(e)}>
                <Icon src={cosmosLeftArrow} />
            </div>
            <div className="featuredProductsRightArrow" onClick={(e) => handleScrollRight(e)}>
                <Icon src={cosmosRightArrow} />
            </div>
        </div>
    )
}
