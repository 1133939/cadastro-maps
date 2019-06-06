import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AgmCoreModule} from '@agm/core';
import { VisualizarFazendeirosComponent } from './visualizar-fazendeiros/visualizar-fazendeiros.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisualizarFazendeirosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'apikey'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
