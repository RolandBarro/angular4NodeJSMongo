import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  addServerMessage='';

  constructor() { 
  	setTimeout(() => {
	  this.allowNewServer = true;  		
  	}, 2000);
  }

  ngOnInit() {
  }

  onAddNewServer() {
  	const data = this;
  	data.addServerMessage = `A new server has been created named ${data.serverName}.`
  }

}
