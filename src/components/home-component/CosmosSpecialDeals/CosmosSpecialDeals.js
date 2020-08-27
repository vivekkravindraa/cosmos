import React from 'react';

import Deals from '../../../building-blocks/organisms/Deals/Deals';
import { Icon } from '../../../building-blocks/atoms/Icon/Icon';
import { Label } from '../../../building-blocks/atoms/Label/Label';

import { specialDeals } from '../../../mocks/home-component-mocks/DealsJsonData';

import cosmosTopArrow from '../../../assets/images/home-component-assets/cosmosTopArrow/cosmosTopArrow.png';
import cosmosBottomArrow from '../../../assets/images/home-component-assets/cosmosBottomArrow/cosmosBottomArrow.png';

import '../../../assets/styles/home-component-styles/CosmosSpecialDeals.scss';

export default function CosmosSpecialDeals() {
    return (
        <div className="specialDealsWrapper">
            <Label label={'Special Deals'} />
            <div className="specialDealsContainer" id="specialDealsContainer">
                <Deals deals={specialDeals} />
            </div>
            <div className="specialDealsTopArrow">
                <Icon src={cosmosTopArrow} id="specialDealsTopArrow" />
            </div>
            <div className="specialDealsBottomArrow">
                <Icon src={cosmosBottomArrow} id="specialDealsBottomArrow" />
            </div>
        </div>
    )
}
