import React from 'react';

import Ads from '../../../building-blocks/organisms/Ads/Ads';
import { Label } from '../../../building-blocks/atoms/Label/Label';

import { sponsoredAds } from '../../../mocks/home-component-mocks/DealsJsonData';

import '../../../assets/styles/home-component-styles/CosmosSponsoredAds.scss';

export default function CosmosSponsoredAds() {
    return (
        <div className="sponsoredAdsWrapper">
            <Label label={'Sponsored Ads'} />
            <div className="sponsoredAdsContainer">
                <Ads ads={sponsoredAds} />
            </div>
        </div>
    )
}