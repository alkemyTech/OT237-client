import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewDetailComponent } from './views/news/detail/new-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDetailComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
