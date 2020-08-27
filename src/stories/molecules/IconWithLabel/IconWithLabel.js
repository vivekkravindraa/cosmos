import React from 'react';

import { Icon } from '../../atoms/Icon/Icon';
import { Label } from '../../atoms/Label/Label';

import './IconWithLabel.scss';

export default function IconWithLabel({ src, label }) {
    return (
        <div className="cosmos-icon-with-label">
            <Icon src={src} />
            {label && <Label label={label} />}
        </div>
    )
}
