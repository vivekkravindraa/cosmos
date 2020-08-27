import React from 'react';

export const Button = ({ label, ...props }) => {
    return <button {...props}>{label}</button>;
};
