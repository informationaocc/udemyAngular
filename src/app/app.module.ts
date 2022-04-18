import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UserComponent } from './user/user.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserComponent,
    DirectivesAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
