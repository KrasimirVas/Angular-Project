import { Component, Input, OnInit } from '@angular/core';

import { PlayerModel } from '../../../core/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player : PlayerModel;
  constructor() { }

  ngOnInit() {
  }

}
