import {Component, Input, Output} from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() item: Task = new Task();

  constructor() {
  }

  public onCheck(): void {
  }
}
