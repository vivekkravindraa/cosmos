import React from 'react';
import IconWithLabel from '../../molecules/IconWithLabel/IconWithLabel';

export default function Icons({ icons }) {
    return icons.map((icon, index) => {
        return <IconWithLabel
            key={index}
            iconSource={icon.src}
            iconLabel={icon.label}
        />
    });
};
