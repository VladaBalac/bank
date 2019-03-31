import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	@Input() private user :User[];
	@Output() private userDelete : EventEmitter<number>

  constructor() {
  	this.userDelete = new EventEmitter();
  }

  ngOnInit() {
  }

  delete(id :number){
  	this.userDelete.emit(id);
  }

}
