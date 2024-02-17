import { AfterViewInit, Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  isLoggedIn :any = true;
  constructor() { }
 
  ngAfterViewInit(): void {
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  }

  prevSlide(): void {
    $('.carousel').carousel('prev');
  }

  nextSlide(): void {
    $('.carousel').carousel('next');
  }
}
