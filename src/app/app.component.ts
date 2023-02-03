import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "./services/todos.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']

})

export class AppComponent implements OnInit {

    todos: Todo[] = []
    todoTitle = ''
    loading = false
    error = ''

    constructor(public todosService: TodosService) {
    }

    ngOnInit() {
        this.fetchTodos()
    }

    addTodo() {
        if (!this.todoTitle.trim()) {
            return
        }
        this.todosService.addTodo({
            title: this.todoTitle,
            completed: false
        })
            .subscribe(todo => {
                this.todos.push(todo);
            })
        this.todoTitle = ''
    }

    fetchTodos() {
        this.loading = true
        this.todosService.fetchTodos()
            .subscribe(response => {
                this.todos = response
                this.loading = false
            }, error => {
                this.error = error.message
            })
    }

    deleteTodos(id: number) {
        this.todosService.removeTodos(id)
            .subscribe(() => {
                this.todos = this.todos.filter(todoId => todoId.id !== id)
            })
    }

    completeTodo(id: number) {
        this.todosService.completeTodo(id)
            .subscribe(todo => {
                this.todos.find(t => t.id === todo.id)!.completed = true
            })
    }
}
