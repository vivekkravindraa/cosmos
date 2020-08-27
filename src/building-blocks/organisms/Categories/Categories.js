import React from 'react';
import Category from '../../molecules/Category/Category';

export default function Categories({ categories }) {
    return categories.map((category, index) => {
        return <Category
            key={index}
            categoryImage={category.src}
            categoryName={category.label}
            categoryDescription={category.description}
            categoryIcon={category.icon}
        />
    })
};
