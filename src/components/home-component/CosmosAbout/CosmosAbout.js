import React from 'react';

import { Label } from '../../../building-blocks/atoms/Label/Label';
import { Image } from '../../../building-blocks/atoms/Image/Image';
import ExploreButton from '../../../building-blocks/molecules/ExploreButton/ExploreButton';

import { aboutBanner } from '../../../mocks/home-component-mocks/AboutJsonData';

import cosmosForward from '../../../assets/images/home-component-assets/cosmosForward/cosmosForward.png';

import '../../../assets/styles/home-component-styles/CosmosAbout.scss';

export default function CosmosAbout() {
    return (
        <div className="aboutContainer" style={{
            backgroundImage: `url(${aboutBanner[0].src})`
        }}>
            <div className="aboutContent">
                <Label label={aboutBanner[0].label} />
                <Label label={aboutBanner[0].subLabel} />
                <ExploreButton
                    label={'Read More'}
                    src={cosmosForward}
                    mode={'secondary'}
                />
            </div>            
            <Image src={aboutBanner[0].src} alt="noImage" />
            <div className="aboutClip"></div>
        </div>
    )
};
