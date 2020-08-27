import React from 'react';

import Accessories from '../../../building-blocks/organisms/Accessories/Accessories';
import ExploreButton from '../../../building-blocks/molecules/ExploreButton/ExploreButton';
import { Label } from '../../../building-blocks/atoms/Label/Label';

import { sportsAccessories } from '../../../mocks/home-component-mocks/CategoryJsonData';

import cosmosForward from '../../../assets/images/home-component-assets/cosmosForward/cosmosForward.png';

import '../../../assets/styles/home-component-styles/CosmosAccessories.scss';

export default function CosmosAccessories() {
    return (
        <div className="accessoriesWrapper">
            <div className="accessoriesHeader">
                <Label label={'Accessories for everyone'}></Label>
                <Label label={'Accessories Collection'}></Label>
            </div>
            <div>
                <ExploreButton
                    label={'Shop Now'}
                    src={cosmosForward}
                    mode={'primary'}
                />
            </div>
            <div className="accessoriesContainer">
                <Accessories accessories={sportsAccessories} />
            </div>
        </div>
    )
}
