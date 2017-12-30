/**
 * Created by Stephen Kuehl on 12/29/17.
 */

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const router: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
