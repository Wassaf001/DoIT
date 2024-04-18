import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  showModal: boolean = false;
  pages: {sno: number, title: string, content: string, completed: boolean }[] = [];
  sno: number = 0;
  completed: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPages();
  }

  openAddPage() { 
    this.showModal = true;
    console.log("open: ", this.showModal);
  }

  closeModal() {  
    this.showModal = false;
    console.log("closed: ", this.showModal);
  }

  fetchPages() {
    console.log("Fetching pages...");
    this.http.get<any[]>('http://localhost:5000/api/pages')
      .subscribe(
        (response) => {
          console.log('Response from server:', response);
          this.pages = response;
        },
        error => {
          console.error('Error fetching pages:', error);
        }
      );
  }
  
  
  handleCreatePage(pageData: { sno: number, title: string, content: string, completed: boolean })  {
    console.log('Form submitted:', pageData);
    this.http.post<any>('http://localhost:5000/api/pages', pageData).subscribe(response => {
      this.pages.push(pageData);
      console.log(pageData);
      console.log("pages: ",this.pages);
      this.closeModal();
    }, error => {
      console.error('Error creating page:', error);
    });
  }
}
