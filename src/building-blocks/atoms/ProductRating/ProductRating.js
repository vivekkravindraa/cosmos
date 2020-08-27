import React from 'react';

import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';

export default function ProductRating({ rating, src }) {
    return (
        <div>
            <Label label={rating} />
            <Icon src={src} />
        </div>
    )
}
