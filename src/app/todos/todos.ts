import { Component, inject, signal } from '@angular/core';
import { Todos as TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { TodoItem } from '../components/todo-item/todo-item';
import {FormsModule} from "@angular/forms";
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItem,FormsModule,FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos {
  private todoService = inject(TodosService);
  title='';
  todos = signal<Todo[]>([]);
  loading = signal(true);
  errorMessage = signal('');
  searchTerm=signal('');

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        
        this.todos.set(data);
        this.loading.set(false);
        this.errorMessage.set('');
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
        this.errorMessage.set('Failed to load todos.');
        this.loading.set(false);
      }
    });
  }

  // Toggle todo completed status
  onToggle(todo: Todo) {
    this.todos.update(items =>
      items.map(item =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  onSubmit() {
    if(this.title.trim()){
    this.todos.update(items => [
      ...items,
      { title: this.title, completed: false,id:Date.now() }
    ]);
    this.title = '';
}
}
}
