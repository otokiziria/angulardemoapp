import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule }    from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { RepositoriesComponent } from './repositories/repositories.component';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailComponent,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,

    MatSliderModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
