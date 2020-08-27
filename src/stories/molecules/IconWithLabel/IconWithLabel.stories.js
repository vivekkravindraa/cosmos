import React from 'react';

import IconWithLabel from './IconWithLabel';
import cosmosUser from '../../../assets/images/common-component-assets/cosmosUser/cosmosUser.png';

export default {
  title: 'Molecules/IconWithLabel',
  component: IconWithLabel
};

const Template = (args) => <IconWithLabel {...args} />;

export const Primary = Template.bind({});
Primary.args =   {
    'src': cosmosUser,
    'label': 'Sign in'
};