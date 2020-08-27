import React from 'react';

export const Label = ({ label, ...props }) => {
    return <p {...props}>{label}</p>;
};
