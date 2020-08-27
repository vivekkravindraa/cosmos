import React from 'react';

import './Label.scss';

export const Label = ({ label, ...props }) => {
    return <p className={`cosmos-label`} {...props}>{label}</p>;
};
