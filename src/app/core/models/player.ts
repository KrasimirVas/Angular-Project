import { KmdModel } from './kmd';

export interface PlayerModel {
    _id : string;
    name : string;
    description : string;
    voteUsers : string[];
    club: string;
    _kmd : KmdModel;
    rating : number;    
    imageUrl: string;
}