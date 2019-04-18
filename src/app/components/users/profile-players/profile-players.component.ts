import { Component, Input, OnInit } from '@angular/core';'@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PlayersService } from '../../../core/services/players.service';

import { PlayerModel } from '../../../core/models/player';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-profile-players',
  templateUrl: './profile-players.component.html',
  styleUrls: ['./profile-players.component.css'],
  animations: [appAnimations]
})
export class ProfilePlayersComponent implements OnInit {
    @Input()userId : string;
    players : PlayerModel[];
    isOwner : boolean;
    constructor(private playersService : PlayersService,
            private route : ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            if (this.userId == sessionStorage.getItem('id')) {
                this.isOwner = true;
            } else {
                this.isOwner = false;
            }
            this.playersService.getAllByUserId(this.userId)
                .subscribe(data => {
                    this.players = data;
                });
        });
        
    }

}
