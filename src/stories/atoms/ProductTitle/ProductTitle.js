import React from 'react';

import { Label } from '../Label/Label';

import './ProductTitle.scss';

export default function ProdcutTitle({ title }) {
    return <div className="cosmos-product-title">
        <Label label={title} />
    </div>;
};
