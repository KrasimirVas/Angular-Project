import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PlayersRoutingModule } from './players.routing.module';

import { CommentsModule } from '../comments/comments.module';

import { PlayersService } from '../../core/services/players.service';

import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDeleteComponent } from './player-delete/player-delete.component';
import { PlayerReviewComponent } from './player-review/player-review.component';

@NgModule({
  imports: [
    CommonModule,
    CommentsModule,
    ReactiveFormsModule,
    PlayersRoutingModule
  ],
  declarations: [
    PlayerComponent,
    PlayerAddComponent,
    PlayersComponent,
    PlayerEditComponent,
    PlayerDeleteComponent,
    PlayerReviewComponent
  ],
  exports: [
    PlayerComponent,
  ],
  providers: [
    PlayersService
  ]
})
export class PlayersModule { }
