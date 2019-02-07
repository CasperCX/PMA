import {createStore} from 'easy-peasy';
import {Model} from './Model';

export const Store = createStore<Model>({
    todos: {
        items: ['item1', 'item2', 'item3'],
        addTodo: (state, payload) => {
          state.items.push(payload)
        }
    }                           
});   

