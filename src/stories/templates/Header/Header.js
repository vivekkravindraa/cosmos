import React from 'react';

import cosmosMenu from '../../../assets/images/common-component-assets/cosmosMenu/cosmosMenu.png';
import cosmosLogo from '../../../assets/images/common-component-assets/cosmosLogo/cosmosLogoS.png';
import cosmosSearch from '../../../assets/images/common-component-assets/cosmosSearch/cosmosSearch.png';

import { Image } from '../../../building-blocks/atoms/Image/Image';
import { Input } from '../../../building-blocks/atoms/Input/Input';
import { Label } from '../../../building-blocks/atoms/Label/Label';
import { Icon } from '../../../building-blocks/atoms/Icon/Icon';
import Icons from '../../../building-blocks/organisms/Icons/Icons';

import { headerIcons } from '../../../mocks/common-component-mocks/HeaderJsonData';

import '../../../assets/styles/common-component-styles/Header.scss';

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLogo">
                <Image src={cosmosMenu} alt={'noImage'} />
                <Label label="Menu" />
                <Image src={cosmosLogo} alt={'noImage'} />
            </div>
            <div className="headerSearchBox">
                <Icon src={cosmosSearch} alt={'noImage'} />
                <Input
                    type={'text'}
                    value=""
                    placeholder="Search 70 stores & 6000+ products"
                    handleChangeReference={(e) => console.log(e)}
                />
            </div>
            <div className="headerIcons">
                <Icons icons={headerIcons} />
            </div>
        </div>
    )
}
