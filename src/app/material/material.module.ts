import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdCardModule, MdMenuModule, MdIconModule, MdInputModule,
         MdGridListModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
  ],
  exports: [
   MdToolbarModule,
   MdButtonModule,
   MdCardModule,
   MdMenuModule,
   MdIconModule,
   MdInputModule,
   MdGridListModule, ]
})
export class MaterialModule { }
/*Created a module to import all angular material functionalities needed to make the app*/
