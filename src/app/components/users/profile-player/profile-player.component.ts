import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { PlayerModel } from '../../../core/models/player';

@Component({
  selector: 'app-profile-player',
  templateUrl: './profile-player.component.html',
  styleUrls: ['./profile-player.component.css']
})
export class ProfilePlayerComponent implements OnInit {
    @Input() player : PlayerModel;
    canEdit : boolean;
    constructor(private authenticationService : AuthenticationService) { }
        
    ngOnInit() {
        this.canEdit = this.player['_acl']['creator'] == sessionStorage.getItem('id') 
        || this.authenticationService.isAdmin();
    }

}
