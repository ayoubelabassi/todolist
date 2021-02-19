import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private resourceURL = 'http://localhost:83/task/tasks.php?method=';

  constructor(private http: HttpClient) {
  }

  public getTasks(): Observable<any> {
    return this.http.get(this.resourceURL + 'GET');
  }

  public saveTask(task: Task): Observable<any> {
    return this.http.post(this.resourceURL + 'POST', task);
  }
}
