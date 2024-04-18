import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './CustomComponents/pages/pages.component';
import { AddPageComponent } from './CustomComponents/add-page/add-page.component';
import { TodosComponent } from './CustomComponents/todos/todos.component';
  
const routes: Routes = [
  {path: '', component: PagesComponent },
  {path: 'addpage', component: AddPageComponent },
  {path: 'todos', component: TodosComponent },
  {path: '', redirectTo: '/pages', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
