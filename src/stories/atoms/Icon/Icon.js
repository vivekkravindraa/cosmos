import React from 'react';

import './Icon.scss';

export const Icon = ({ src, alt, height, ...props }) => {
    return <img className={`cosmos-icon`} src={src} alt={alt} height={height} {...props} />;
};
