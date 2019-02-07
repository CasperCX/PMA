import * as React from "react";
import "./App.scss";

import {StoreProvider} from 'easy-peasy';
import {Store} from './Store';
import {Component} from "components/Component";
import { Test } from "components/Test";


export const App = () => (
  <StoreProvider store={Store}>
    <Component name="casper" />
    <Test message="hello"/>
  </StoreProvider>
)

