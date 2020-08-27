import React from 'react';

import { Icon } from '../../atoms/Icon/Icon';
import { Label } from '../../atoms/Label/Label';

import './Icons.scss';

export default function Icons({ icons }) {
    return icons.map((icon, index) => {
        return <div className="cosmos-icons" key={index}>
            <Icon src={icon.src} />
            {icon.label && <Label label={icon.label} />}
        </div>
    });
};
