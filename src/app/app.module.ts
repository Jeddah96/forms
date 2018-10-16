import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as fromComponents from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import * as fromServices from './services';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NpnSliderModule } from 'npn-slider';
import { SliderComponent } from './slider/slider.component';
import { TruncatePipe } from './slider/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components,
    SliderComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NpnSliderModule
  ],
  providers: [
    // ...fromServices.services
  ]
  ,
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
