import * as React from 'react';
import './App.scss';

import {Provider} from 'react-redux';

import Component from 'components/Component';
import {Test} from './components/Test';
import {Store} from './Store';


export const App = () => (
  <Provider store={Store}>
    <Component name="casper" />
    <Test message="hello"/>
  </Provider>
)

