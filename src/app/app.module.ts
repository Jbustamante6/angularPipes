import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CapitalizePipe } from './pipes/capitalize.pipe';

import { AppComponent } from './app.component';
import { DomsecurePipe } from './pipes/domsecure.pipe';
import { PassPipe } from './pipes/pass.pipe';
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomsecurePipe,
    PassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
