import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { PlusComponent } from './plus.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component'
import { EmployeeService } from './service/employee.service'
import {HttpModule} from '@angular/http'

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, TutorialComponent, PlusComponent, EmployeeListComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
