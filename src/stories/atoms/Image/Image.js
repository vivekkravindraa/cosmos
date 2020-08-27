import React from 'react';

import './Image.scss'

export const Image = ({ src, alt, ...props }) => {
    return <img className="cosmos-image" src={src} alt={alt} {...props } />;
};
