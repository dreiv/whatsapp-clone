import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideComponent } from './side.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    SideComponent,
    HeaderComponent,
    SearchComponent,
    ChatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideComponent
  ]
})
export class SideModule { }
