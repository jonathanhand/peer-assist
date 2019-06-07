import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule'},
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule'},
      { path: 'courses', loadChildren: '../courses/courses.module#CoursesPageModule'},
      { path: 'appointments', loadChildren: '../appointments/appointments.module#AppointmentsPageModule'},
      { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },

    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
