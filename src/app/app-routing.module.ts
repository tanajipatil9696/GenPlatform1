import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { ProductComponent } from 'src/components/product/product.component';
import { SignUpComponent } from 'src/components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
    { path: 'product', component: ProductComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
