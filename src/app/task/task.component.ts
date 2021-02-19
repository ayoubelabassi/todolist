import { Component, Input, Output } from "@angular/core";
import * as EventEmitter from "events";

@Component({
    selector: 'ngx-task',
    templateUrl: './task.component.html'
})
export class TaskComponent{

    @Input("item")
    public task:any;

    @Output("item")
    taskEvent: EventEmitter<any>;
    constructor(){
    }
}