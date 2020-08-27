import React from 'react';

import Categories from '../../../building-blocks/organisms/Categories/Categories';
import { Label } from '../../../building-blocks/atoms/Label/Label';

import { sportsCategories } from '../../../mocks/home-component-mocks/CategoryJsonData';

import '../../../assets/styles/home-component-styles/CosmosSportsCategories.scss';

export default function CosmosSportsCategories() {
    return (
        <div className="sportsCategoriesWrapper">
            <div className="sportsCategoriesHeader">
                <Label label={'Offers For All'}></Label>
                <Label label={'Best Deals'}></Label>
            </div>
            <div className="sportsCategoriesContainer">
                <Categories categories={sportsCategories} />
            </div>
        </div>
    )
}
