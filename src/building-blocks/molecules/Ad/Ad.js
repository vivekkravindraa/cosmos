import React from 'react';

import { Image } from '../../atoms/Image/Image';
import { Label } from '../../atoms/Label/Label';

export default function Accessory({
    adImage,
    adProductCategory,
    adProductDescription,
    adProductOffer
}) {
    return (
        <div className="ad">
            <div className="adImage">
                <Image src={adImage} />
            </div>
            <div className="adProductDetails">
                <div className="adProductCategory">
                    <Label label={adProductCategory} />
                </div>
                <div className="adProductDescription">
                    <Label label={adProductDescription} />
                </div>
                <div className="adProductOffer">
                    <Label label={adProductOffer} />
                </div>
            </div>
        </div>
    )
}
