import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import { ToastrService } from 'ngx-toastr';
import { PlayersService } from '../../../core/services/players.service';

import { PlayerModel } from '../../../core/models/player';

import { appAnimations } from '../../../app.animations';
 
@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css'],
  animations: [appAnimations]
})
export class PlayerDeleteComponent implements OnInit {
    player : PlayerModel;
    playerForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', [Validators.required]),
        club: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
        imageUrl: new FormControl(''),
        playerUrl: new FormControl('')
    });
      
    constructor(private playersService : PlayersService,
            private toastr : ToastrService,
            private route : ActivatedRoute,
            private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.playersService.getById(id)
                .subscribe(data => {
                    this.player = data;
                    this.playerForm.controls.club.setValue(this.player.club);
                    this.playerForm.controls.description.setValue(this.player.description);
                    this.playerForm.controls.name.setValue(this.player.name);
                    this.playerForm.controls.imageUrl.setValue(this.player.imageUrl);
                   
                })
        });
    }
    
    onSubmit() {
        this.playersService.delete(this.player._id).subscribe(data => {
            this.router.navigate(['/players']);
            this.toastr.success('Successfully delete ' +  this.player.name + '!');
        });
    }

}
