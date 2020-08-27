import React from 'react';

import './Input.scss';

export const Input = ({
    type,
    value,
    placeholder,
    handleChangeReference,
    ...props
}) => {
    return <input
        className={`cosmos-input`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChangeReference}
        {...props}
    />;
};
