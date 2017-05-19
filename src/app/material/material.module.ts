import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule
  ],
  exports: [
   MdToolbarModule,
   MdButtonModule ]
})
export class MaterialModule { }
/*Created a module to import all angular material functionalities needed to make the app*/