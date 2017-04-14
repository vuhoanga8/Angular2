import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { PlusComponent } from './plus.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './service/employee.service';
import { EmployeeDetailComponent } from './employee-detail.component';

import {HttpModule} from '@angular/http';
import {appRoutes} from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations: [AppComponent, TutorialComponent, PlusComponent, EmployeeListComponent, HomeComponent, NotFoundComponent, EmployeeDetailComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
