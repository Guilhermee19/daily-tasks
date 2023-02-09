import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  showFiller: boolean = false;

  list_tasks: any = ['Todas']

  ngOnInit(): void {
  }

  addNewList(){
    this.list_tasks.push('New')
  }
}
