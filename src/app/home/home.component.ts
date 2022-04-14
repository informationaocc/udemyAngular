import {Component, OnInit} from '@angular/core'

@Component({
    selector:'.app-home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})
export class HomeComponent implements OnInit{
    btnStatus:boolean=false;
    serverCreateStatus:string='No Server was Created';
    serverName:string='TestServer';

    constructor(){        
        setTimeout(()=>{
            this.btnStatus=true;
        },3000) 
    }

    ngOnInit() {
        
    }
    
    onCreateServer(){
        this.serverCreateStatus='Server has created. Name is '+ this.serverName;
    }
    onUpdateServerName(event:Event){
        this.serverName=(<HTMLInputElement>event.target).value;
    }
}