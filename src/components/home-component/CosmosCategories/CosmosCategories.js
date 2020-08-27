import React from 'react';

import Categories from '../../../building-blocks/organisms/Categories/Categories';

import { categories } from '../../../mocks/home-component-mocks/CategoryJsonData';

import '../../../assets/styles/home-component-styles/CosmosCategories.scss';

export default function CosmosCategories() {
    return (
        <div className="categoriesContainer">
            <Categories categories={categories} />
        </div>
    )
}
