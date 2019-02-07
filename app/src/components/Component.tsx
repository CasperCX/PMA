import * as React from 'react';
import {connect} from 'react-redux';
import {State} from 'easy-peasy';
import {todosModel} from '../models/todosModel';


const Component: React.FC<{name: string, todos: Array<any>}> = ({name, todos}) => {

  if (!todos.length) return <span>No todos for this board</span>
  
  return (
    <ul>
      {todos.map((ticket, i) => (
        <li key={i} style={{padding: '10px'}}>
          {ticket}
        </li>
        )
      )}
    </ul>
  )
};


export default connect((state: State<todosModel>) => ({
  todos: state.todos.items || []
}))(Component)


