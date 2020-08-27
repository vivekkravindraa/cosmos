import React from 'react';

import { Icon } from '../../atoms/Icon/Icon';
import { Label } from '../../atoms/Label/Label';

export default function Policy({ policyIcon, policyLabel }) {
    return (
        <div className="policy">
            <Icon src={policyIcon} />
            <Label label={policyLabel} />
        </div>
    )
}
