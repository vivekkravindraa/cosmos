import React from 'react';

import cosmosMenu from '../../assets/images/common-component-assets/cosmosMenu/cosmosMenu.png';
import cosmosLogo from '../../assets/images/common-component-assets/cosmosLogo/cosmosLogoS.png';
import cosmosSearch from '../../assets/images/common-component-assets/cosmosSearch/cosmosSearch.png';

import { Image } from '../../building-blocks/atoms/Image/Image';
import { Input } from '../../building-blocks/atoms/Input/Input';
import { Label } from '../../building-blocks/atoms/Label/Label';
import { Icon } from '../../building-blocks/atoms/Icon/Icon';
import Icons from '../../building-blocks/organisms/Icons/Icons';
import Navigation from '../Navigation/Navigation';

import { headerIcons, headerMobileIcons } from '../../mocks/common-component-mocks/HeaderJsonData';

import '../../assets/styles/common-component-styles/Header.scss';

export default function Header() {
    const displayNavigationMenu = (e) => {
        document.getElementById('cosmosNavigation').style.display = 'flex';
    }

    const closeNavigationMenu = (e) => {
        document.getElementById('cosmosNavigation').style.display = 'none';
    }

    return (
        <div className="headerWrapper">
            <div className="headerContainer">
                <div className="headerLogo">
                    <Image src={cosmosMenu} alt={'noImage'} onClick={(e) => displayNavigationMenu(e)} />
                    <Label label={'Menu'} onClick={(e) => displayNavigationMenu(e)}  />
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
                <div className="headerMobileIcons">
                    <Icons icons={headerMobileIcons} />
                </div>
            </div>
            <div className="absoluteNavigation" id="cosmosNavigation">
                <Navigation handleReference={(e) => closeNavigationMenu(e)} />
            </div>
        </div>
    )
}
