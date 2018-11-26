import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import SelectPayment from '../payment';
import OrderRecap from '../order';

import { Main, Title, Content, Placeholder } from './styled-components';

const App = () => (
  <Provider store={store}>
    <Main>
      <Title>Pilote Privé</Title>
      <Content>
        <Placeholder>Your code here</Placeholder>
        <SelectPayment />
      </Content>
      <OrderRecap />
    </Main>
  </Provider>
);

export default App;
