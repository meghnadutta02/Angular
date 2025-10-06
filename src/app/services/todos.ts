import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  // accessible to all
})
export class Todos {
  http=inject(HttpClient);
  // todoItems:Array<Todo>=[{
  //   title:'groceries',
  //   id:0,
  //   userId:12,
  //   completed:false
  // },{
  //   title:'homework',
  //   id:1,
  //   userId:10,
  //   completed:true
  // },{
  //   title:'watch movie',
  //   id:3,
  //   userId:12,
  //   completed:false
  // }]
  getTodos(){
    const url=`https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<Todo>>(url);
  }
}
