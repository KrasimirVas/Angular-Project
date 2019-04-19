import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { PlayerModel } from '../../../core/models/player';

@Component({
  selector: 'app-home-player',
  templateUrl: './home-player.component.html',
  styleUrls: ['./home-player.component.css']
})
export class HomePlayerComponent implements OnInit {
  @Input() player : PlayerModel;
  constructor(public authService : AuthenticationService) { }

  ngOnInit() { 
  }

}
