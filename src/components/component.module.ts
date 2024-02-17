import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomenavComponent } from './homenav/homenav.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductComponent,
    LoginComponent,
    NavbarComponent,
    SignUpComponent,
    DashboardComponent,
    HomepageComponent,
    HomenavComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    ProductComponent,
    LoginComponent,
    NavbarComponent
  ]
})
export class ComponentModule { }
