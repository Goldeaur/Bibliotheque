import { Injectable } from '@angular/core';
import {Book} from "../models/Book.model";
import {Subject} from "rxjs";
import firebase from "firebase/compat";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  constructor(private httpClient: HttpClient) { }

  emitBooks(){
    this.booksSubject.next(this.books);
  }

  saveBooks(){
    this.httpClient
      .put('https://bibliotheque-1a156-default-rtdb.europe-west1.firebasedatabase.app/books.json', this.books)
      .subscribe(
        ()=>{
          console.log('Enregistrement terminé');
        },
        (error)=>{
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getBooks(){
    this.httpClient
      .get('https://bibliotheque-1a156-default-rtdb.europe-west1.firebasedatabase.app/books.json')
      .subscribe((data: Book[])=> {
        this.books=data ? data : [];
        this.emitBooks();
      });
  }

  getBook(id:number){
    return new Promise(
      ((resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data)=>{
            resolve(data.val());
          }, (error)=>{
            reject(error);
          }
        );
      })
    );
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  deleteBook(book: Book){
    const bookIndexToRemove = this.books.findIndex(
      (bookEl)=> {
        if(bookEl === book){
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }
}
