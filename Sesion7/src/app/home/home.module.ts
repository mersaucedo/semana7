import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';



@NgModule({
  declarations: [
    TextComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[TextComponent]
})
export class HomeModule { }
