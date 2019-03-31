import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	@Input() private user :User[];

  constructor() { }

  ngOnInit() {
  }

}
