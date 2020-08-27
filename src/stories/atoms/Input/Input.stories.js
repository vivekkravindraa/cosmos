import React from 'react';

import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    'type': 'text',
    'placeholder': 'Search 70 stores & 6000+ products'
};
