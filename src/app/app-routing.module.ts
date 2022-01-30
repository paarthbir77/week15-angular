import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { SectionComponent } from './components/section/section.component';
import { ButtonComponent } from './components/button/button.component';
import { AdminComponent } from './components/pages/admin/admin.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', component: AdminComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
