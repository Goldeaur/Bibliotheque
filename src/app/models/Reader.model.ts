import {Book} from "./Book.model";

export class Reader {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public city: string,
    public phone: string,
    public email: string,
    public creationDate: Date,
    public lastModificationDate: Date,
    public Status: string,
    public books: Book[] = []
  ){

  }
}
