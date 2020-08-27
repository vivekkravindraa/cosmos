import React from 'react';

import { Label } from '../../atoms/Label/Label';
import ProductPrice from '../../atoms/ProductPrice/ProductPrice';

export default function Accessory({
    accessoryImage,
    accessoryLabel,
    accessoryPriceLabel,
    accessoryCurrency,
    accessoryPrice
}) {
    return (
        <div className="accessory">
            <div className="accessoryImage" style={{
                backgroundImage: `url(${accessoryImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="accessoryName">
                <Label label={accessoryLabel} />
            </div>
            <div className="accessoryPriceLabel">
                <Label label={accessoryPriceLabel} />
                <ProductPrice currency={accessoryCurrency} price={accessoryPrice} />
            </div>
        </div>
    )
}
