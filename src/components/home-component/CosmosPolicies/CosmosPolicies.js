import React from 'react';

import Policies from '../../../building-blocks/organisms/Policies/Policies';

import { policies } from '../../../mocks/common-component-mocks/FooterJsonData';

import '../../../assets/styles/home-component-styles/CosmosPolicies.scss';

export default function CosmosPolicies() {
    return (
        <div className="policiesContainer">
            <Policies policies={policies} />
        </div>
    )
}
