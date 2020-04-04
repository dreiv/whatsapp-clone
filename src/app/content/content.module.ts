import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [HeaderComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
