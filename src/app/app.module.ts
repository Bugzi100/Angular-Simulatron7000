import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScenarioDetailsComponent } from './scenario-details/scenario-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScenarioService } from './scenario.service';

@NgModule({
  declarations: [
    AppComponent,
    ScenarioDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    ScenarioService,
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
