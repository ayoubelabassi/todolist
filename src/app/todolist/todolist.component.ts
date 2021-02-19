import { Component } from "@angular/core";

@Component({
    selector: 'ngx-todo-list',
    templateUrl: './todolist.component.html'
})
export class TodoListComponent {

    public tasks: Array<any> = [];
    public task: string;
    constructor() {
    }
}