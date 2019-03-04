import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'urlpreview', loadChildren: './urlpreview/urlpreview.module#UrlpreviewPageModule' },
  { path: 'user-history', loadChildren: './user-history/user-history.module#UserHistoryPageModule' },
  { path: 'local-notifications', loadChildren: './local-notifications/local-notifications.module#LocalNotificationsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
