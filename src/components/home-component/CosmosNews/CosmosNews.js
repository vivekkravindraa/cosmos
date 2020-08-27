import React from 'react';

import { Button } from '../../../building-blocks/atoms/Button/Button';
import { Icon } from '../../../building-blocks/atoms/Icon/Icon';
import { Image } from '../../../building-blocks/atoms/Image/Image';
import { Input } from '../../../building-blocks/atoms/Input/Input';
import { Label } from '../../../building-blocks/atoms/Label/Label';

import cosmosBrouchure from '../../../assets/images/common-component-assets/cosmosBrouchure/cosmosBrouchure.png';
import cosmosStoreWhite from '../../../assets/images/common-component-assets/cosmosStoreWhite/cosmosStoreWhite.png';

import '../../../assets/styles/home-component-styles/CosmosNews.scss';

export default function CosmosNews() {
    return (
        <div className="newsContainer">
            <div>
                <Image src={cosmosBrouchure} />
                <Label label={'Download Cosmos Brouchure'} />
            </div>
            <div>
                <Label label={'Get Connected'} />
                <Label label={'We will keep you updated with Cosmos News'} />
                <div>
                    <Input type="text" />
                    <Button label={'Submit'} />
                </div>
            </div>
            <div>
                <Label label={'Find A Store'} />
                <Label label={'Cosmos Stores are in different locations.'} />
                <div>
                    <Icon src={cosmosStoreWhite} />
                    <Button label={'Locate'} />
                </div>
            </div>
        </div>
    )
};
