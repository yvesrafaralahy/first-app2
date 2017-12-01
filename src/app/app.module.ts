import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { BoxComponent } from './box/box.component';
import { ListPersonneService } from './list-personne.service';



@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ListPersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
