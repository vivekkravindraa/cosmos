import React from 'react';

import { Icon } from './Icon';
import cosmosDoubleArrow from '../../../assets/images/home-component-assets/cosmosDoubleArrow/cosmosDoubleArrow.png';

export default {
  title: 'Atoms/Icon',
  component: Icon
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    'src': cosmosDoubleArrow
};
