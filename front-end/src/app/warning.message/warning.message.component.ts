import { Component } from '@angular/core';

@Component({
  selector: 'warning-message',
  templateUrl: './warning.message.component.html',
  styleUrls:['./warning.message.component.css']
})
export class WarningMessageComponent {
  displayMessage = true;
  timeLogs = [];

  constructor() {}

  toggleDisplay() {
  	this.timeLogs.push({
  		time: new Date(),
  	});
  	this.displayMessage = !this.displayMessage;
  }
  currentIndex(i) {
  	return i > 4 ? true : false;
  }
}