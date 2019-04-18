import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_KEY, APP_SECRET, API_URL } from '../constants/api.constants';

import { AuthenticationService } from './authentication.service';

import { PlayerModel } from '../models/player';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {
    private playersUrl : string = `${API_URL}appdata/${APP_KEY}/players`;
    private sortThreeByRatingUrl : string = `${this.playersUrl}?query={}&sort={"rating": -1}&limit=6`;

    constructor(private http : HttpClient,
            private authenticationServise : AuthenticationService) {  }
    
    getTopThree() : Observable<PlayerModel[]> {
        return this.http.get<PlayerModel[]>(this.sortThreeByRatingUrl);
    }
    
    getAll() : Observable<PlayerModel[]> {
        return this.http.get<PlayerModel[]>(this.playersUrl);
    }
    
    getAllByUserId(userId : string) : Observable<PlayerModel[]> {
        return this.http.get<PlayerModel[]>(`${this.playersUrl}?query={"_acl":{"creator":"${userId}"}}`);
    }
    
    getById(id : string) : Observable<PlayerModel> {
        return this.http.get<PlayerModel>(`${this.playersUrl}/${id}`);
    }
    
    addPlayer(playerData : PlayerModel) {
        return this.http.post<PlayerModel>(`${this.playersUrl}`, playerData);
    }
    
    delete(id : string) {
        return this.http.delete<PlayerModel>(`${this.playersUrl}/${id}`);
    }
    
    edit(playerData : PlayerModel) {
        return this.http.put<PlayerModel>(`${this.playersUrl}/${playerData._id}`, playerData);
    }
    
}

