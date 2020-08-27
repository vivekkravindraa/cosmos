import React from 'react';

import { Label } from '../Label/Label';

import './ProductVariants.scss';

export default function ProductVariants({ variants }) {
    return (
        <div className="cosmos-product-variants">
            <Label label={variants} />
        </div>
    )
}
