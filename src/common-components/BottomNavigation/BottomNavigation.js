import React from 'react';

import Icons from '../../building-blocks/organisms/Icons/Icons';

import { bottomNavigationItems } from '../../mocks/common-component-mocks/NavigationJsonData';

import '../../assets/styles/common-component-styles/BottomNavigation.scss';

export default function BottomNavigation() {
    return (
        <div className="bottomNavigationContainer">
            <div className="bottomNavigationItems">
                <Icons icons={bottomNavigationItems} />
            </div>
        </div>
    )
}
