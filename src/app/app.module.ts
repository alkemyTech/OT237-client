import { SharedModule } from './shared/shared.module';
import { UserEffects } from './state/effects/users.effect';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { MemberEffects } from './state/effects/members.effects';
import { CategoriaEffects } from './state/effects/categories.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([
      MemberEffects,
      CategoriaEffects,
      UserEffects
    ]),
    SharedModule,
    StoreDevtoolsModule.instrument({ name:'TEST' }),
    SharedModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,
    LeafletModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }