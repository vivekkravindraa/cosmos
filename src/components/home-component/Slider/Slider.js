import React from 'react';

import { Label } from '../../../building-blocks/atoms/Label/Label';
import { Icon } from '../../../building-blocks/atoms/Icon/Icon';
import ExploreButton from '../../../building-blocks/molecules/ExploreButton/ExploreButton';

import { sliders } from '../../../mocks/home-component-mocks/SliderJsonData';

import cosmosDoubleArrow from '../../../assets/images/home-component-assets/cosmosDoubleArrow/cosmosDoubleArrow.png';
import cosmosForward from '../../../assets/images/home-component-assets/cosmosForward/cosmosForward.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../../../assets/styles/home-component-styles/Slider.scss';

const Slider = () => {
    return (
        <div className="sliderContainer cosmosHomeSlider">
            <Carousel 
                autoPlay
                infiniteLoop={true}
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
            >
                {
                    sliders.map((image, index) => {
                        return (
                            <div key={index}>
                                <img id="bannerImage" src={image} alt="no_image" height="100%" />
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className="sliderAbsoluteContent">
                <div>
                    <Label label={'Going The Distance'} />
                    <Icon src={cosmosDoubleArrow} />
                </div>
                <Label label={'Wide range of sports accessories'} />
                <div>
                    <ExploreButton
                        label={'Explore'}
                        src={cosmosForward}
                        mode={'default'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Slider;