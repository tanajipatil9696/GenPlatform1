import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(MyProfileComponent, {
      width: '400px', // Set the width of the dialog
      // other configuration options
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
