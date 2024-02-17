import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  profile:any;
  ngOnInit(): void {
    this.profile = {
      'username': 'Tanaji Patil',
      'email': 'codiesbuddy@gmail.com',
      'bio': 'Software Developer'
    }
  }
}
