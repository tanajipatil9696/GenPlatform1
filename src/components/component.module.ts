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
@NgModule({
  declarations: [
    ProductComponent,
    LoginComponent,
    NavbarComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  exports: [
    ProductComponent,
    LoginComponent,
    NavbarComponent
  ]
})
export class ComponentModule { }
