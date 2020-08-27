import React from 'react';

import Policy from '../../molecules/Policy/Policy';

import './Policies.scss';

export default function Policies({ policies }) {
    return <div className="cosmos-policies">
        {policies.map((policy, index) => {
            return <Policy
                key={index}
                src={policy.src}
                label={policy.label}
            />
        })}
    </div>
};
