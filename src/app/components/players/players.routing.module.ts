import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDeleteComponent } from './player-delete/player-delete.component';
import { PlayerReviewComponent } from './player-review/player-review.component';

import { AuthGuard } from '../../core/guards/auth/auth.guard';  

const routes : Routes = [
       {path: '', component: PlayersComponent},
       {path: 'review/:id', canActivate: [AuthGuard], component: PlayerReviewComponent},
       {path: 'edit/:id', canActivate: [AuthGuard], component: PlayerEditComponent},
       {path: 'delete/:id', canActivate: [AuthGuard], component: PlayerDeleteComponent},
       {path: 'add', canActivate: [AuthGuard], component: PlayerAddComponent}
   ];

@NgModule({
        exports: [ RouterModule ],
        imports: [ RouterModule.forChild(routes) ]
})
export class PlayersRoutingModule { }
