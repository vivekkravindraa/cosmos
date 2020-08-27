import React from 'react';

export const Input = ({
    type,
    value,
    placeholder,
    handleChangeReference,
    ...props
}) => {
    return <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChangeReference}
        {...props}
    />;
};
