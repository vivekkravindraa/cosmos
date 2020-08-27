import React from 'react';

import { Label } from '../Label/Label';

export default function ProductPrice({ currency, price }) {
    return (
        <div>
            <Label label={currency} />
            <Label label={price} />
        </div>
    )
};
