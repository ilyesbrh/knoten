import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeComponent } from './home/home.component';
/* angular material components */
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    SignupComponent,
    CreateProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    /* material imports */
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatIconModule,
    MatCheckboxModule

  ],
  entryComponents: [LoginComponent, SignupComponent, CreateProjectComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
