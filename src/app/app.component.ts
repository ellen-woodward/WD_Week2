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
}
