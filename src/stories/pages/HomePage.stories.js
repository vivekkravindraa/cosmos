import React from 'react';

import HomePage from './HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage
};

const Template = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
