import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { appAnimations } from '../../../app.animations';

import { ToastrService } from 'ngx-toastr';
import { PlayersService } from '../../../core/services/players.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { CommentsComponent } from '../../comments/comments/comments.component';

import { PlayerModel } from '../../../core/models/player';

@Component({
  selector: 'app-player-review',
  templateUrl: './player-review.component.html',
  styleUrls: ['./player-review.component.css'],
  animations: [appAnimations]
})
export class PlayerReviewComponent implements OnInit {
    canVote : boolean;
    canEdit : boolean;
    player : PlayerModel;
    voteForm = new FormGroup({
        rating: new FormControl('', [Validators.required])
    });
    constructor(private route : ActivatedRoute,
            private toastr : ToastrService,
            private playersService : PlayersService,
            private authenticationService : AuthenticationService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.playersService
                .getById(id)
                .subscribe(data => {
                    let userId = sessionStorage.getItem('id');
                    this.player = data;
                    this.canVote = !this.player.voteUsers.includes(userId);
                    this.canEdit = data['_acl']['creator'] == userId 
                        || this.authenticationService.isAdmin();
                });
        });
    }
    
    vote(){
        if (this.canVote) {
        let userId = sessionStorage.getItem('id');
            let currentRating = Number(this.player.rating);
            this.player.voteUsers.push(userId);
            this.player.rating = (currentRating + Number(this.voteForm.value.rating)) / (this.player.voteUsers.length == 1 ? 1 : 2);
            this.canVote = !this.canVote;
            this.playersService.edit(this.player).subscribe(data => {
                this.toastr.success('Successfully vote for ' + this.player.name + '!');
            });
        }
    }

}
