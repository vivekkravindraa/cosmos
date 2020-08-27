import React from 'react';

import Categories from '../../../building-blocks/organisms/Categories/Categories';

import { subCategories } from '../../../mocks/home-component-mocks/CategoryJsonData';

import '../../../assets/styles/home-component-styles/CosmosSubCategories.scss';

export default function CosmosSubCategories() {
    return (
        <div className="subCategoriesContainer">
            <Categories categories={subCategories} />
        </div>
    )
}
