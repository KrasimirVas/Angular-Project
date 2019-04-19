import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { PlayersService } from '../../../core/services/players.service';

import { HomePlayersComponent } from '../home-players/home-players.component'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    constructor(private authService : AuthenticationService,
            private playerService : PlayersService) { }
    
    ngOnInit() {
        
    }

}
