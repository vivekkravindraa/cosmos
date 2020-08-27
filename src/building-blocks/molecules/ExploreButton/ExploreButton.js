import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

import '../../../assets/styles/building-blocks-styles/ExploreButton.scss';

export default function ExploreButton({ label, src, mode, size }) {
    return (
        <div className={[
            'cosmos-explore-button',
            `cosmos-explore-button--${mode}`,
            `cosmos-explore-button--${size}`
        ].join(' ')}>
            <Button label={label} />
            <Icon src={src} />
        </div>
    )
}

ExploreButton.propTypes = {
    mode: PropTypes.oneOf(['default', 'primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

ExploreButton.defaultProps = {
    mode: 'default',
    size: 'small'
}
