import React from 'react';

import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';

import './ProductRating.scss';

export default function ProductRating({ rating, src }) {
    return (
        <div className="cosmos-product-rating">
            <Label label={rating} />
            <Icon src={src} />
        </div>
    )
}
