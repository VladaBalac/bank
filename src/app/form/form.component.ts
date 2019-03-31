import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	user :User;
	formUser :FormGroup;

  constructor(private fb :FormBuilder) {
  	this.makeForm();
  }

  makeForm(){
  	this.formUser = this.fb.group({
  		'name':["", [Validators.required, Validators.minLength(3)]],
  		'surname':["", [Validators.required]],
  		'cardNumber':["", [Validators.required]],
  		'phoneNumber': ["", [Validators.required]],
  		'email': ["", [Validators.required]]
  	});
  }

  ngOnInit() {
  }

}
