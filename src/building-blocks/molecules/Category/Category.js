import React from 'react';

import { Label } from '../../atoms/Label/Label';
import { Icon } from '../../atoms/Icon/Icon';

export default function Category({
    categoryImage, categoryName, categoryDescription, categoryIcon
}) {
    return (
        <div className="category">
            <div className="categoryImage" style={{
                backgroundImage: `url(${categoryImage})`
            }}>
            </div>
            <div className="categoryName">
                <Label label={categoryName} />
                {categoryIcon && <Icon src={categoryIcon} />}
            </div>
            <div className="categoryDescription">
                <Label label={categoryDescription} />
            </div>
        </div>
    )
}
