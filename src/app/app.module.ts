import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TaskListComponent } from './task/task-list/task-list.component';

const routes: Route[]=[
    {
        path:'login', component: LoginComponent
    },
    {
        path:'tasks', component: TaskListComponent
    },
    {
        path:'', redirectTo:'/tasks', pathMatch: 'full'
    }
];


@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule, TaskModule, BrowserModule, AuthModule, RouterModule.forRoot(routes)
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }
