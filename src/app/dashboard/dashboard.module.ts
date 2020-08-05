import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

import { MatSidenavModule } from '@angular/material/sidenav'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
    //   {
    //   }
    // ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [DashboardComponent, SideNavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
