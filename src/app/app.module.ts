import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserModule} from './user/user.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    UserModule,
    routing,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
