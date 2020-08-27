import React from 'react';

import { Icon } from '../../atoms/Icon/Icon';
import { Label } from '../../atoms/Label/Label';

export default function IconWithLabel({ iconSource, iconLabel }) {
    return (
        <div className="iconWithLabel">
            <Icon src={iconSource} />
            {iconLabel && <Label label={iconLabel} />}
        </div>
    )
}
