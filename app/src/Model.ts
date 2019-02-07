import {Action} from 'easy-peasy'

interface TodosModel {
  items: Array<string>
  addTodo: Action<TodosModel, string>
}

export interface Model {
  todos: TodosModel
}