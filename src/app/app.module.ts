import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerolistComponent } from './page/herolist/herolist.component';
import { HomeComponent } from './page/home/home.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HerocardComponent } from './common/herocard/herocard.component';
import { HeroeditorComponent } from './page/heroeditor/heroeditor.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent,
    HomeComponent,
    NavigationComponent,
    HerocardComponent,
    HeroeditorComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
