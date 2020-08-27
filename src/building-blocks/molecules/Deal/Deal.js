import React from 'react';

import { Image } from '../../atoms/Image/Image';
import { Label } from '../../atoms/Label/Label';

export default function Deal({ dealImage, dealLabel, dealCollection }) {
    return (
        <div className="deal">
            <div className="dealImage">
                <Image src={dealImage} />
            </div>
            <div className="dealOfferAndCollection">
                <Label label={dealLabel} />
                <Label label={dealCollection} />
            </div>
        </div>
    )
}
