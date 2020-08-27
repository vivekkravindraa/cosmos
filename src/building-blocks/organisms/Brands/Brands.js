import React from 'react';
import Brand from '../../molecules/Brand/Brand';

export default function Brands({ brands }) {
    return brands.map((brand, index) => {
        return <Brand
            key={index}
            brandImage={brand.src}
            brandName={brand.label}
        />
    })
};
