import {Reader} from "./Reader.model";

export class Book {
  constructor(
    public id: number,
    public isbn10: string,
    public isbn13: string,
    public imageLink: string,
    public title: string,
    public author: string,
    public epoch: string,
    public nationality: string,
    public type: string,
    public subType: string,
    public readerCategory: string,
    public comment: string,
    public photo: string,
    public status: string
  ){

  }

}
