import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [InfoComponent, HeaderComponent, ContentComponent],
  imports: [CommonModule],
  exports: [InfoComponent]
})
export class InfoModule {}
