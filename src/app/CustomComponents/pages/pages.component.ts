import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  constructor(private router: Router){}
  OpenAddPage(){
    this.router.navigateByUrl('addpage');
  }
}
