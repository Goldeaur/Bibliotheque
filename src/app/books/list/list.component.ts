import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../models/Book.model";
import {Subscription} from "rxjs";
import {BooksService} from "../../services/books.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.booksSubscription = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.emitBooks();
  }

  onNewBook(){
    this.router.navigate(['/books', 'new']).then();
  }

  onDeleteBook(book: Book){
    this.bookService.deleteBook(book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books', id]).then();
}
  ngOnDestroy(): void {
   this.booksSubscription.unsubscribe();
  }

}
