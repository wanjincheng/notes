import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import  { IndexComponent } from '../pages/index/index';
import  { InputComponent } from '../pages/input/input';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
