import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './core/content/content.component';
import { MainComponent } from './core/main/main.component';
import { ProblemComponent } from './core/problem/problem.component';
import { ContestComponent } from './core/contest/contest.component';
import { ResourceComponent } from './core/resource/resource.component';

// Define your routes here
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'problems', component: ProblemComponent },
  { path: 'contest', component: ContestComponent },
  { path: 'resource', component: ResourceComponent },

  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
