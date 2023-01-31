import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Incredible To Do App';
  thingsToDo = [
    'Learn Javascript',
    'Learn Angular',
    'Learn Regex'
  ];
  thingsCompleted=[];

  TaskSummary():string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} completed`;
  }

  constructor() {
    setInterval(() => {
      this.thingsToDo.push('Make coffee');
    }, 10000);
  }
}
