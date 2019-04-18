import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomePlayersComponent } from './home-players/home-players.component';
import { HomePlayerComponent } from './home-player/home-player.component';
import { HomeCommentsComponent } from './home-comments/home-comments.component';
import { HomeCommentComponent } from './home-comment/home-comment.component';
import { BannedComponent } from './banned/banned.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlueScreenComponent } from './blue-screen/blue-screen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HomePlayersComponent,
    HomePlayerComponent,
    HomeCommentsComponent,
    HomeCommentComponent,
    BannedComponent,
    NotFoundComponent,
    BlueScreenComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ]
})
export class LandingModule { }
