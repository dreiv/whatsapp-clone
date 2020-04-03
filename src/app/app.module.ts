import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { InfoComponent } from './info/info.component';
import { SideModule } from './side/side.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    SideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
