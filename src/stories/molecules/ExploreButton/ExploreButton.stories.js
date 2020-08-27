import React from 'react';

import ExploreButton from './ExploreButton';
import cosmosForward from '../../../assets/images/home-component-assets/cosmosForward/cosmosForward.png';

export default {
  title: 'Molecules/ExploreButton',
  component: ExploreButton
};

const Template = (args) => <ExploreButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  'label': 'Explore',
  'src': cosmosForward,
  'mode': 'default',
  'size': 'small'
};

export const Primary = Template.bind({});
Primary.args = {
  'label': 'Explore',
  'src': cosmosForward,
  'mode': 'primary',
  'size': 'medium'
};

export const Secondary = Template.bind({});
Secondary.args = {
  'label': 'Explore',
  'src': cosmosForward,
  'mode': 'secondary',
  'size': 'large'
};
