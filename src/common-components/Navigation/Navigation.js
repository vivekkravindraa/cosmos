import React, { useState } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import { Icon } from '../../building-blocks/atoms/Icon/Icon';
import { Label } from '../../building-blocks/atoms/Label/Label';
import { Input } from '../../building-blocks/atoms/Input/Input';

import { navigationItems } from '../../mocks/common-component-mocks/NavigationJsonData';

import cosmosLogoBlackS from '../../assets/images/common-component-assets/cosmosLogoBlack/cosmosLogoBlackS.png';
import cosmosLeftArrowBlack from '../../assets/images/common-component-assets/cosmosLeftArrowBlack/cosmosLeftArrowBlack.png';
import cosmosClose from '../../assets/images/common-component-assets/cosmosClose/cosmosClose.png';

import '../../assets/styles/common-component-styles/Navigation.scss';

export default function Navigation({ handleReference }) {
    const size = useWindowSize();
    const [ id, setId ] = useState(0);

    return (
        <div className="navigationContainer">
            {
                !id ?
                    <React.Fragment>
                        <div className="navigationLogo">
                            <Icon src={cosmosLogoBlackS} />
                            <Label label={'EXPLORE'} />
                        </div> 
                        <div className="navigationItems">
                            {navigationItems.slice(size.width >= 992 ? 2 : 0).map((item, index) => {
                                return (
                                    <div key={index} onClick={(e) => setId(item.id)}>
                                        <Label label={item.label} />
                                        <Icon src={item.src} />
                                        <Icon src={item.icon} />
                                    </div>
                                )
                            })}
                        </div>
                    </React.Fragment>
                :
                <div className="subNavigation">
                    {navigationItems.map((item, index) => {
                        return id === item.id ?
                            <div key={index}>
                                <div>
                                    <Icon src={cosmosLeftArrowBlack} onClick={() => setId(0)} />
                                    <Label label={item.label} />
                                </div>
                                <Input type={'text'} placeholder={'Search 70+ Sports'} />
                                <div className="subNavigationItems">
                                    {item.subNavigationItems.map((subs, idx) => {
                                        return (
                                            <div key={idx}>
                                                <Label label={subs.label} />
                                                <Icon src={subs.src} />
                                                <Icon src={subs.icon} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        : null
                    })}
                </div>
            }
            <div className="absoluteClosure" onClick={handleReference}>
                <Icon src={cosmosClose} />
            </div>
        </div>
    )
}
