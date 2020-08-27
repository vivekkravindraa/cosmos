import React from 'react';

import Policy from './Policy';
import cosmosWarranty from '../../../assets/images/common-component-assets/cosmosWarranty/cosmosWarranty.png';
import cosmosPickup from '../../../assets/images/common-component-assets/cosmosPickup/cosmosPickup.png';
import cosmosDelivery from '../../../assets/images/common-component-assets/cosmosDelivery/cosmosDelivery.png';
import cosmosReturn from '../../../assets/images/common-component-assets/cosmosReturn/cosmosReturn.png';

export default {
  title: 'Molecules/Policy',
  component: Policy
};

const Template = (args) => <Policy {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    'src': cosmosWarranty,
    'label': 'Minimum 2 years warranty'
};

export const Secondary = Template.bind({});
Secondary.args = {
    'src': cosmosPickup,
    'label': 'Drive through/Free pickup in stores'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    'src': cosmosDelivery,
    'label': 'Home Delivery at your Doorstep'
};

export const Quadrinary = Template.bind({});
Quadrinary.args = {
    'src': cosmosReturn,
    'label': 'Easy return policy'
};
