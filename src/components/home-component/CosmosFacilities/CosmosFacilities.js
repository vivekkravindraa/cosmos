import React from 'react';

import Categories from '../../../building-blocks/organisms/Categories/Categories';
import ExploreButton from '../../../building-blocks/molecules/ExploreButton/ExploreButton';

import { facilities } from '../../../mocks/home-component-mocks/CategoryJsonData';

import cosmosForward from '../../../assets/images/home-component-assets/cosmosForward/cosmosForward.png';

import '../../../assets/styles/home-component-styles/CosmosFacilities.scss';

export default function CosmosFacilities() {
    return (
        <div className="facilitiesWrapper">
            <div className="facilitiesContainer">
                <Categories categories={facilities} />
            </div>
            <div>
                <ExploreButton
                    label={'Explore'}
                    src={cosmosForward}
                    mode={'secondary'}
                />
            </div>
        </div>
    )
};
