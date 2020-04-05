import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content.component';
import { MessangerComponent } from './messanger/messanger.component';

@NgModule({
  declarations: [HeaderComponent, ContentComponent, MessangerComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
