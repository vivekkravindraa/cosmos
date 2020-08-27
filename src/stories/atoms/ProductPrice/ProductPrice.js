import React from 'react';

import { Label } from '../Label/Label';

import './ProductPrice.scss';

export default function ProductPrice({ currency, price }) {
    return (
        <div className="cosmos-price">
            <Label label={currency} />
            <Label label={price} />
        </div>
    )
};
