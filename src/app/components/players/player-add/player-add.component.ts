import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";

import { ToastrService } from 'ngx-toastr';
import { PlayersService } from '../../../core/services/players.service';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css'],
  animations: [appAnimations]
})
export class PlayerAddComponent implements OnInit {
    playerForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', [Validators.required]),
        club: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
        imageUrl: new FormControl(''),
        playerUrl: new FormControl('')
    });
      
    constructor(private playersService : PlayersService,
            private toastr : ToastrService,
            private router: Router) { }

    ngOnInit() { }
    
    onSubmit() {
        this.playerForm.value.username = sessionStorage.getItem('username');
        this.playerForm.value.rating = 0;
        this.playerForm.value.voteCount = 0;
        this.playerForm.value.voteUsers = [];
        this.playersService.addPlayer(this.playerForm.value).subscribe(data => {
            this.router.navigate(['/players']);
            this.toastr.success('Successfully add ' +  this.playerForm.value.name + '!');
        }); 
    }

}
