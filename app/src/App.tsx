import * as React from "react";
import "./App.scss";
import { StoreProvider, createStore, useStore, useAction } from 'easy-peasy';

import Title from "components/Title/Title";
import Test from "components/Test";



const store = createStore({
 todos: {
      items: ['Install easy-peasy', 'Build app', 'Profit'],
      // 👇 define actions
      add: (state, payload) => {
        state.items.push(payload) // 👈 you mutate state to update (we convert
      }                           //    to immutable updates)
    }                             //
});   



export const App = () => (
  <StoreProvider store={store}>
    <Test name={'casper'}/>
  </StoreProvider>
)

