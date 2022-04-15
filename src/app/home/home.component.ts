import {Component, OnInit} from '@angular/core'

@Component({
    selector:'.app-home',
    templateUrl:'home.component.html',
    styles:[`
    .online{
        color:white;
    }
    `]
})
export class HomeComponent implements OnInit{
    btnStatus:boolean=false;
    serverCreateStatus:string='No Server was Created';
    serverName:string='TestServer';
    serverCreated:boolean=false;
    serverStatus:string='offline';
    serverID:number=10;
    servers=['Testserver','Testserver 2' ]
    constructor(){   
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';    

        setTimeout(()=>{
            this.btnStatus=true;
        },3000) 
    }

    ngOnInit() {
        
    }
    
    onCreateServer(){
        this.serverCreated=true;
        this.servers.push(this.serverName);
        this.serverCreateStatus='Server has created. Name is '+ this.serverName;
        this.serverStatus='online';
    }
    onUpdateServerName(event:Event){
        this.serverName=(<HTMLInputElement>event.target).value;
    }
    getserverStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus==='online'? 'green':'red';
    }
}