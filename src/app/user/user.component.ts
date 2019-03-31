import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';

const Userr = [{"_id":1, "name": "Srdjan", "surname": "Srmcevic", "cardNumber": "115-3124125435-45", "phoneNumber": 21654677, "email": "srdjan@gmail.com"},
{"_id":1, "name": "Darko", "surname": "Popovic", "cardNumber": "115-32545232-12", "phoneNumber": 3154658, "email": "darko@gmail.com"}]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
	private userList :User[] = [];

  constructor() {
  	for(let i of Userr){
  		this.userList.push(new User(i));
  	}
  }

  ngOnInit() {
  }

}
