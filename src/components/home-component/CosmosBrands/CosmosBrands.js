import React from 'react';

import Brands from '../../../building-blocks/organisms/Brands/Brands';
import { Label } from '../../../building-blocks/atoms/Label/Label';

import { brandBanner, brands } from '../../../mocks/home-component-mocks/BrandJsonData';

import '../../../assets/styles/home-component-styles/CosmosBrands.scss';

export default function CosmosBrands() {
    return (
        <div className="brandsWrapper" style={{
            backgroundImage: `url(${brandBanner[0].src})`,
            backgroundSize: `cover`,
            backgroundPosition: `top center`,
            backgroundRepeat: `no-repeat`,
        }}>
            <Label label={brandBanner[0].label} />
            <Label label={brandBanner[0].subLabel} />
            <div className="brandsContainer">
                <Brands brands={brands} />
            </div>
            <div className="brandsClip"></div>
        </div>
    )
};
