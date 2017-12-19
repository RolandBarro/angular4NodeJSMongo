import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css']
})
export class SimpleLoginComponent implements OnInit {
  loginMessage = '';

  constructor() { }

  resetForm() {
  	this.formData = {
  	  userName: '',
  	  password: '',  	  
  	  formValid: false,	
  	};
  }

  ngOnInit() {
  	this.resetForm()
  }

  checkInput() {
  	const data = this.formData;
  	this.formData.formValid = (data && data.userName !== '' && data.password !== '');  	
  }

  login() {
  	const data = this.formData;
  	this.loginMessage = `User ${data.userName} has successfully logged in.`;
  	this.resetForm();
  }
}
