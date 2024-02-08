import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ProductComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    LoginComponent
  ]
})
export class ComponentModule { }
