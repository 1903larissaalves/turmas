import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
