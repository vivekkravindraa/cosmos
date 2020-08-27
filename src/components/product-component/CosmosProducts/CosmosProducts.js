import React from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import Products from '../../../building-blocks/organisms/Products/Products';
import { Label } from '../../../building-blocks/atoms/Label/Label';
import { Icon } from '../../../building-blocks/atoms/Icon/Icon';

import { products } from '../../../mocks/product-component-mocks/ProductJsonData';

import cosmosDistanceRunners from '../../../assets/images/product-component-assets/cosmosDistanceRunners/cosmosDistanceRunners.png';

import '../../../assets/styles/product-component-styles/CosmosProducts.scss';

export default function CosmosProducts() {
    const size = useWindowSize();

    return (
        <div className="productsWrapper">
            {size.width >= 992 ? null : <div className="productsHeader">
                <div>
                    <Label label={'For'}></Label>
                    <Label label={'All Distance Runners'}></Label>
                </div>
                <Icon src={cosmosDistanceRunners} />
            </div>}
            <div className="productsContainer">
                {size.width >= 992 ? <div className="productsHeader">
                    <div>
                        <Label label={'For'}></Label>
                        <Label label={'All Distance Runners'}></Label>
                    </div>
                    <Icon src={cosmosDistanceRunners} />
                </div> : null}
                <Products products={products.slice(0,9)} />
            </div>
        </div>
    )
}
