import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { config } from './../environments/config';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/register-user/register-user.component';

import { MyAuthenticationService } from './myServices/my-authentication.service';
import { AuthGuardService } from './myServices/auth-guard.service';
import { DataHandlingService } from './myServices/data-handling.service';
import { LoginService } from './myServices/login-service.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewParkingLocationsComponent } from './components/view-parking-locations/view-parking-locations.component';
import { ViewSlotsComponent } from './components/view-slots/view-slots.component';
import { CancellationComponent } from './components/cancellation/cancellation.component';
import { ViewAllUsersComponent } from './components/view-all-users/view-all-users.component';
import { FeedbackUserComponent } from './components/feedback-user/feedback-user.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Register', component: RegisterUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'MainPage', component: MainPageComponent },
  { path: 'ViewParkingLocations', component: ViewParkingLocationsComponent },
  { path: 'ViewSlots/:id', component: ViewSlotsComponent },
  { path: 'cancel', component: CancellationComponent },
  { path: 'viewAllUser', component: ViewAllUsersComponent },
  { path: 'userFeedback', component: FeedbackUserComponent }




]

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomeComponent,
    LoginComponent,
    MainPageComponent,
    ViewParkingLocationsComponent,
    ViewSlotsComponent,
    CancellationComponent,
    ViewAllUsersComponent,
    FeedbackUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config)
  ],
  providers: [AuthGuardService, DataHandlingService, MyAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
