import {User} from "./User.model";

export class Book {
  photo: string;
  constructor(
    public title: string,
    public author: string,
    public category: string,
    public user: User,
    public dateBack: Date,
    public dateTake: Date
  ){

  }

}
