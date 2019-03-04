import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserHistoryPage } from './user-history.page';

const routes: Routes = [
  {
    path: '',
    component: UserHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserHistoryPage]
})
export class UserHistoryPageModule {}
