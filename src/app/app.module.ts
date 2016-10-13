import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {UIRouterModule} from "ui-router-ng2";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import pages
import {HomePageComponent} from './pages/home-page/home-page.component';

// import { AppComponent } from './app.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {APP_STATES} from './app.states';
@NgModule({
  declarations: [
    // AppComponent,
    HomePageComponent,
    AppPageComponent,//root
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      otherwise: { state: 'minecraftly.home', params: {} }
    })
  ],
  providers: [],
  bootstrap: [AppPageComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
