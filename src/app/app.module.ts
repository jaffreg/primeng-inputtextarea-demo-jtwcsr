import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
