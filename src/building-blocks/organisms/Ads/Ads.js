import React from 'react';
import Ad from '../../molecules/Ad/Ad';

export default function Ads({ ads }) {
    return ads.map((ad, index) => {
        return <Ad
            key={index}
            adImage={ad.src}
            adProductCategory={ad.productCategory}
            adProductDescription={ad.productDescription}
            adProductOffer={ad.productOffer}
        />
    })
};