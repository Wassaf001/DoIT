import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './CustomComponents/pages/pages.component';
import { AddPageComponent } from './CustomComponents/add-page/add-page.component';

const routes: Routes = [
  {path: '', component: PagesComponent },
  {path: 'addpage', component: AddPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
