import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import SelectPayment from '../payment';
import OrderRecap from '../order';
import SearchBar from '../search';
import { Main, Title, Content } from './styled-components';

const App = () => (
  <Provider store={store}>
    <Main>
      <Title>Pilote Privé</Title>
      <Content>
        <SearchBar />
        <SelectPayment />
      </Content>
      <OrderRecap />
    </Main>
  </Provider>
);

export default App;
