import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, delay, map, Observable, tap, throwError} from "rxjs";

export interface Todo {
    completed: boolean
    title: string
    id?: number
}

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    url: string = 'https://jsonplaceholder.typicode.com/todos'

    constructor(public http: HttpClient) {
    }


    addTodo(todo: Todo): Observable<Todo> {
        const headers = new HttpHeaders({
            'MyCustomHeader': Math.random().toString()
        })
        return this.http.post<Todo>(this.url, todo, {
            headers
        })
    }

    fetchTodos(): Observable<Todo[]> {
        let params = new HttpParams()
        params = params.append('_limit', '5')
        params = params.append('custom', "params")

        return this.http.get<Todo[]>(this.url, {
            params,
            observe: 'response'
        })
            .pipe(
                map((response: any) => {
                    return response.body
                }),
                delay(1500),
                catchError(error => {
                    console.log("Error", error.message)
                    return throwError(error)
                })
            )
    }

    removeTodos(id: number): Observable<any> {
        return this.http.delete<void>(`${this.url}/${id}`, {
            observe: 'events',
        })
            .pipe(
                tap(event => {
                    if (event.type === HttpEventType.Sent) {
                        console.log("Sent", event)
                    }
                    if (event.type === HttpEventType.Response) {
                        console.log("response:", event)
                    }
                })
            )

    }

    completeTodo(id: number): Observable<any> {
        return this.http.put<Todo>(`${this.url}/${id}`, {
            completed: true
        }, {
            responseType: 'json'
        })
    }
}
