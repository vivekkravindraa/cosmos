import React from 'react';

import { Image } from './Image';
import cosmosLogoBlackS from '../../../assets/images/common-component-assets/cosmosLogoBlack/cosmosLogoBlackS.png';

export default {
  title: 'Atoms/Image',
  component: Image
};

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    'src': cosmosLogoBlackS,
    'label': 'Minimum 2 years warranty'
};
