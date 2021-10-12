import {Book} from "./Book.model";
import {ListComponent} from "../books/list/list.component";

export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public phone: string,
    public address: string,
    public books: Book[] = []
  ){

  }
}
