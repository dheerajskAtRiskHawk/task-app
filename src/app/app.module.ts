import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TaskModule } from '../task/task.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';



@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule, TaskModule, BrowserModule, AuthModule
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }
