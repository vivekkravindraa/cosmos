import React from 'react';

export const Icon = ({ src, alt, height, ...props }) => {
    return <img src={src} alt={alt} height={height} {...props} />;
};
