import { Component, OnInit } from '@angular/core';
import { appAnimations } from '../../../app.animations';

import { PlayersService } from '../../../core/services/players.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { PlayerModel } from '../../../core/models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  animations: [appAnimations]
})
export class PlayersComponent implements OnInit {
  players : PlayerModel[];
  selectedFieldName : string;
  userId : string;
  constructor(private playersService : PlayersService,
          public authService : AuthenticationService,) { }

  ngOnInit() {
      this.playersService
          .getAll()
          .subscribe(data => {
              this.players = data;
              this.orderByRating();
              this.selectedFieldName = 'rating';
              this.userId = sessionStorage.getItem('id');
          });
  }
  
  
  orderByRating() {
      this.players = this.players.sort((a, b) => {
          return b.rating - a.rating; 
       });
  }
  


}
