import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  blogs: any[] = [];
  newProduct = { name: '', price: 0 };

  constructor() { }

  ngOnInit(): void {
    // Fetch products from the service when the component initializes
  
      this.blogs = [{
        'img': 'blog1.jpg',
        'title': 'Blog1',
        'desc': 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        'blogger': 'Tanaji Patil'
      },
      {
        'img': 'blog1.jpg',
        'title': 'Blog1',
        'desc': 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        'blogger': 'Tanaji Patil'
      },
      {
        'img': 'blog1.jpg',
        'title': 'Blog1',
        'desc': 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        'blogger': 'Tanaji Patil'
      },
      {
        'img': 'blog1.jpg',
        'title': 'Blog1',
        'desc': 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        'blogger': 'Tanaji Patil'
      },
      {
        'img': 'blog1.jpg',
        'title': 'Blog1',
        'desc': 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        'blogger': 'Tanaji Patil'
      },
      {
        'img': 'blog1.jpg',
        'title': 'Blog1',
        'desc': 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        'blogger': 'Tanaji Patil'
      },
      {
        'img': 'blog1.jpg',
        'title': 'Blog1',
        'desc': 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        'blogger': 'Tanaji Patil'
      }];
    }
  }


