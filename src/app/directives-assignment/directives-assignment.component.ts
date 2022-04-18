import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styles:[`
    .fontClass{
        color:white;
    }
    `]
})
export class DirectivesAssignmentComponent implements OnInit {
  displayStatus: boolean = false;
  counter: number = 0;
  logDate: Date=new Date();
  logArray: any=[];
  constructor() { }

  ngOnInit(): void {
  }
  btnToggle() {
    
    if (this.displayStatus == false)
      this.displayStatus = true;
    else
      this.displayStatus = false;

    this.counter = this.counter + 1;
    let obj={
      'SNo':this.counter,
      'logDateTime':this.logDate
    }
    this.logArray.push(obj);
  }
  
  getBackcolor(item){
    return item >= 5? 'blue':'red';
  }

}
