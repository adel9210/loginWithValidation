import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent],
    exports: [RouterModule, LoginComponent]
})
export class AppRoutingModule { }