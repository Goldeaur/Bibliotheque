import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book;
  constructor(private route: ActivatedRoute,
              private bookService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.book = new Book('', '', '', null, null, null);
    const id = this.route.snapshot.params['id'];
    this.bookService.getBook(+id).then((value: Book) => {
      this.book = value;
    });
  }

  onBack(){
    this.router.navigate(['/books']).then();
  }

}
