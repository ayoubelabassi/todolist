import {Component, OnInit} from '@angular/core';
import {Task} from '../task/task.model';
import {TaskService} from '../task/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent implements OnInit {

  public tasks: Array<Task> = [];
  public task = '';

  constructor(private taskService: TaskService) {
  }

  public addTask(): void {
    const t = {
      name: this.task,
      finished: false
    };
    this.tasks.push(t);
    this.task = '';

    this.taskService.saveTask(t).subscribe((res) => {
      this.loadTasks();
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
      this.tasks.forEach(item => {
        if (item.finished === '0') {
          item.finished = false;
        }
      });
    });
  }
}
