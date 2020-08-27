import React from 'react';
import Accessory from '../../molecules/Accessory/Accessory';

export default function Accessories({ accessories }) {
    return accessories.map((accessory, index) => {
        return <Accessory
            key={index}
            accessoryImage={accessory.src}
            accessoryLabel={accessory.label}
            accessoryPriceLabel={accessory.priceLabel}
            accessoryPrice={accessory.price}
            accessoryCurrency={accessory.currency}
        />
    })
};