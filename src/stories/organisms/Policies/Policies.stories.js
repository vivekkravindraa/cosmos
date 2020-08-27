import React from 'react';

import Policies from './Policies';
import cosmosWarranty from '../../../assets/images/common-component-assets/cosmosWarranty/cosmosWarranty.png';
import cosmosPickup from '../../../assets/images/common-component-assets/cosmosPickup/cosmosPickup.png';
import cosmosDelivery from '../../../assets/images/common-component-assets/cosmosDelivery/cosmosDelivery.png';
import cosmosReturn from '../../../assets/images/common-component-assets/cosmosReturn/cosmosReturn.png';

export default {
  title: 'Organisms/Policies',
  component: Policies
};

const Template = (args) => <Policies {...args} />;

export const Primary = Template.bind({});
Primary.args =  {
  'policies': [
    {
      'src': cosmosWarranty,
      'label': 'Minimum 2 years warranty'
    },
    {
      'src': cosmosPickup,
      'label': 'Drive through/Free pickup in stores'
    },
    {
      'src': cosmosDelivery,
      'label': 'Home Delivery at your Doorstep'
    },
    {
      'src': cosmosReturn,
      'label': 'Easy return policy'
    }
  ]
}