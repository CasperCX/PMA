import {Action} from 'easy-peasy'

interface dataModel {
  items: Array<string>
  addTodo: Action<dataModel, string>
}

export interface todosModel {
  todos: dataModel
}