import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { SectionComponent } from './components/section/section.component';
import { ButtonComponent } from './components/button/button.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/pages/user/user.component';
import { OfflineuserComponent } from './components/pages/offlineuser/offlineuser.component';
import { RegisterComponent } from './components/pages/register/register.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'offlineuser', component: OfflineuserComponent},
  {path: 'register', component: RegisterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    SectionComponent,
    ButtonComponent,
    AdminComponent,
    UserComponent,
    OfflineuserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes, { enableTracing: true }), AppRoutingModule, HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
