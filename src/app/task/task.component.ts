import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() item: Task = new Task();
  @Output() completedChange = new EventEmitter<Task>();
  constructor() {
  }
  public onCheck(): void {
    this.completedChange.emit(this.item);
  }
}
