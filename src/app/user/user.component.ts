import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  btnStatus: boolean = false;
  userName: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  resetInputBox() {
    this.userName='';
    this.btnStatus=false;
}
checkInputBox() {

    if (this.userName != '') {
        this.btnStatus = true;
    }
    else {
        this.btnStatus = false;
    }
}
onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    this.checkInputBox();
}
}
