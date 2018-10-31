import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickModule } from 'ngx-slick'; //https://www.npmjs.com/package/slick-carousel for ngx-slick features

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BookFilterPipe } from './shared/book-filter.pipe';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BookFilterPipe
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCvBFClFH4N5MI_8JNLcYXm7Nuq19zHIXM",
      libraries: ["places"]
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

