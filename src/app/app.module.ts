import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { ContentComponent } from './content/content.component';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './side/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    ContentComponent,
    InfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
