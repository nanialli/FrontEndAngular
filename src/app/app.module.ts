import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, allcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AdminInfoTeacherListComponent } from './admin-info-teacher-list/admin-info-teacher-list.component';



@NgModule({
  declarations: [
    AppComponent,
   allcomponents,
   AdminInfoTeacherListComponent,
   HttpClientModule,
   ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    RouterModule
       
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
