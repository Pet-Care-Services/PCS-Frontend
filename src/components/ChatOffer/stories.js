import React from 'react';
import { OFFER_STATUS } from 'consts/enums';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/ChatOffer',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <div style={{ background: 'white', padding: 30 }}>
      <Component {...args} />
    </div>
  </AppThemeProvider>
);

const Pending = Template.bind({});
const Rejected = Template.bind({});
const Accepted = Template.bind({});

Pending.args = {
  image:
    'https://media.istockphoto.com/photos/young-redhead-woman-hug-her-small-mixedbreed-dog-picture-id485251750?b=1&k=20&m=485251750&s=170667a&w=0&h=v7Wf4tPLnkGl_yZxXiWyjzKYdLgirM_zieYBLilAM5c=',
  price: {
    from: 10,
    to: 20,
    priceType: 'HOURLY',
  },
  status: OFFER_STATUS.PENDING,
  message: 'Some message from client',
  availabilities: [
    {
      from: '2022-10-17T13:00:00.000Z',
      to: '2022-10-19T13:00:00.000Z',
      cyclic: false,
    },
    {
      from: '2022-10-19T12:00:00.000Z',
      to: '2022-10-19T14:00:00.000Z',
      cyclic: true,
      period: 'WEEK',
    },
    {
      from: '2022-10-20T12:00:00.000Z',
      to: '2022-10-20T18:00:00.000Z',
      cyclic: true,
      period: 'MONTH',
    },
  ],
};

Rejected.args = {
  ...Pending.args,
  status: OFFER_STATUS.REJECTED,
};

Accepted.args = {
  ...Pending.args,
  status: OFFER_STATUS.ACCEPTED,
};

export { Pending, Rejected, Accepted };
