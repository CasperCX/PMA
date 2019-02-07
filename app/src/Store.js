import {createStore} from 'easy-peasy';

export const Store = createStore({
    items: {
        tickets: ['Ticket1', 'Ticket2'],

    add_ticket: (state, payload) => {
        state.tickets.push(payload) 
        }                           
    }                            
});   


// export const Store = createStore({
//     todos: {
//       items: ['Install easy-peasy', 'Build app', 'Profit'],
//       // 👇 define actions directly on your model
//       add: (state, payload) => {
//         // do simple mutation to update state, and we make it an immutable update
//         state.items.push(payload)
//         // (you can also return a new immutable instance if you prefer)
//       }
//     }
//   });