import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ContentComponent } from './core/content/content.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { CardSectionComponent } from './core/card-section/card-section.component';
import { RightColumnComponent } from './core/right-column/right-column.component';
import { MainComponent } from './core/main/main.component';
import { CenterSectionComponent } from './core/center-section/center-section.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ContentComponent, PaginationComponent, CardSectionComponent, RightColumnComponent, MainComponent, CenterSectionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
