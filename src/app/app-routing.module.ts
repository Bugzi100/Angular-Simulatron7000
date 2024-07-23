import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenarioDetailsComponent } from './scenario-details/scenario-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'scenarios/:uuid', component: ScenarioDetailsComponent},
    { path: '', redirectTo: '/scenarios/0d86a9a3-0b9a-48bd-b244-3affd3ce8022', pathMatch: 'full'},

  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
