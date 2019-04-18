import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../core/services/players.service';

import { PlayerModel } from '../../../core/models/player';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.css'],
  animations: [appAnimations]
})
export class HomePlayersComponent implements OnInit {
    players : PlayerModel[];
    constructor(private playersService : PlayersService) { }

    ngOnInit() {
        this.playersService
            .getTopThree()
            .subscribe(data => {
                this.players = data;
            });
    }
}
