import React from 'react';

import { Image } from '../../atoms/Image/Image';
import { Label } from '../../atoms/Label/Label';

export default function Brand({ brandImage, brandName }) {
    return (
        <div className="brand">
            <Image src={brandImage} />
            <Label label={brandName} />
        </div>
    )
};
