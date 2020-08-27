import React from 'react';
import Deal from '../../molecules/Deal/Deal';

export default function Accessories({ deals }) {
    return deals.map((deal, index) => {
        return <Deal
            key={index}
            dealImage={deal.src}
            dealLabel={deal.label}
            dealCollection={deal.collection}
        />
    })
};
