import React from 'react';

import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

import './ExploreButton.scss';

export default function ExploreButton({ label, src, size, mode }) {
    return (
        <div className="cosmos-explore-button">
            <Button label={label} mode={mode} size={size} />
            <Icon src={src} />
        </div>
    )
}
