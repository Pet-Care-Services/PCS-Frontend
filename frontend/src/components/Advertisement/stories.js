import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Advertisement',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Advertisement = Template.bind({});

Advertisement.args = {
  activities: ['Walking', 'Feeding', 'SthElse'],
  animals: ['Cat', 'Dog', 'Fish', 'Horse'],
  starsValue: 4,
  price: {
    from: 10,
    to: 20,
    priceType: 'hourly',
  },
  location: 'Kraków',
  image:
    'https://media.istockphoto.com/photos/young-redhead-woman-hug-her-small-mixedbreed-dog-picture-id485251750?b=1&k=20&m=485251750&s=170667a&w=0&h=v7Wf4tPLnkGl_yZxXiWyjzKYdLgirM_zieYBLilAM5c=',
};

export { Advertisement };
