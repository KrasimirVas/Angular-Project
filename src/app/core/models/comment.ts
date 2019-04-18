export interface CommentModel {
    _id : string;
    text : string;
    username : string;
    userId : string;
    playerId : string;
    likeUsers: string[];
}