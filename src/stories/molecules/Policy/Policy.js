import React from 'react';

import { Icon } from '../../atoms/Icon/Icon';
import { Label } from '../../atoms/Label/Label';

import './Policy.scss';

export default function Policy({ src, label }) {
    return (
        <div className="cosmos-policy">
            <Icon src={src} />
            <Label label={label} />
        </div>
    )
}
