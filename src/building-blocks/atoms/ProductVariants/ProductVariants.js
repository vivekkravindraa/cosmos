import React from 'react';

import { Label } from '../Label/Label';

export default function ProductVariants({ variants }) {
    return (
        <div>
            <Label label={variants} />
        </div>
    )
}
