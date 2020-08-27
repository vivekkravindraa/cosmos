import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ label, mode, size, ...props }) => {
    return <button className={[`cosmos-button`, `cosmos-button--${mode}`, `cosmos-button--${size}`].join(' ')} {...props}>{label}</button>;
};

Button.propTypes = {
    mode: PropTypes.oneOf(['default', 'primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
    mode: 'default',
    size: 'small'
}
