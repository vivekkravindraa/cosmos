import React from 'react';
import Policy from '../../molecules/Policy/Policy';

export default function Policies({ policies }) {
    return policies.map((policy, index) => {
        return <Policy
            key={index}
            policyIcon={policy.src}
            policyLabel={policy.label}
        />
    })
};
