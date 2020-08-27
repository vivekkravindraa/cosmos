import React from 'react';

import Icons from './Icons';
import cosmosUser from '../../../assets/images/common-component-assets/cosmosUser/cosmosUser.png';
import cosmosStore from '../../../assets/images/common-component-assets/cosmosStore/cosmosStore.png';
import cosmosCart from '../../../assets/images/common-component-assets/cosmosCart/cosmosCart.png';

export default {
  title: 'Organisms/Icons',
  component: Icons
};

const Template = (args) => <Icons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    'icons': [
        {
            'src': cosmosUser,
            'label': 'Sign in'
        },
        {
            'src': cosmosStore,
            'label': 'My store'
        },
        {
            'src': cosmosCart,
            'label': 'My Cart'
        }
    ]
};
