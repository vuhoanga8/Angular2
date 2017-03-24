import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TutorialComponent} from './tutorial.component';
import {PlusComponent} from './plus.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TutorialComponent, PlusComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
