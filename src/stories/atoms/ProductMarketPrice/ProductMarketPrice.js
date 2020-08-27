import React from 'react';

import { Label } from '../Label/Label';

import './ProductMarketPrice.scss';

export default function ProductMarketPrice({ price }) {
    return <div className="cosmos-market-price">
        <Label label={price} />
    </div>
};
