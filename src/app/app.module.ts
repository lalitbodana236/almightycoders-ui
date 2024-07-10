import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular'; // import FullCalendar

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ContentComponent } from './core/content/content.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { CardSectionComponent } from './core/card-section/card-section.component';
import { RightColumnComponent } from './core/right-column/right-column.component';
import { MainComponent } from './core/main/main.component';
import { CenterSectionComponent } from './core/center-section/center-section.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { ContestComponent } from './core/contest/contest.component';
import { ProblemComponent } from './core/problem/problem.component';
import { ResourceComponent } from './core/resource/resource.component';
import { TopicListComponent } from './core/resource/topic-list/topic-list.component';
import { TopicDetailsComponent } from './core/resource/topic-details/topic-details.component';
import { CodeBlockComponent } from './core/resource/code-block/code-block.component';
import { HighlightPipe } from './filter/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    PaginationComponent,
    CardSectionComponent,
    RightColumnComponent,
    MainComponent,
    CenterSectionComponent,
    CalendarComponent,
    ContestComponent,
    ProblemComponent,
    ResourceComponent,
    TopicListComponent,
    TopicDetailsComponent,
    CodeBlockComponent,
    HighlightPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FullCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
