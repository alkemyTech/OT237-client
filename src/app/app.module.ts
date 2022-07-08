import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { MemberEffects } from './state/effects/members.effects';
import { ROOT_REDUCERS } from './state/app.state';
import { CategoriaEffects } from './state/effects/categories.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([MemberEffects,
                           CategoriaEffects]),
    StoreDevtoolsModule.instrument({ name:'TEST' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }