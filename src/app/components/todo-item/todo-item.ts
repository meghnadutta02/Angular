import { Component, input, output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodo,UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  todo=input.required<Todo>();   // input signals are read-only
  toggle=output<Todo>();

  handleChange() {
    this.toggle.emit(this.todo());
  }
}
