import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { TableComponent } from '../table/table.component';
import { FormComponent } from '../form/form.component';
import { UserComponent } from '../user/user.component';

export const route :Routes = [
	{path: 'user', component: UserComponent},
	{path: 'table', component: TableComponent},
	{path: 'table/form', component: FormComponent},
	{path: '', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],

  exports: [
  	RouterModule
  ],

  declarations: []
})
export class AppRouterModule { }
