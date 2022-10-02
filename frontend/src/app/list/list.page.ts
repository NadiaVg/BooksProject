import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  books: Array<Ibook> = [];
  searchBook: string;

  constructor(private bookService: BookService) {

    this.getAllBooks();

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    })
  }
  removeBook(book, i) {
    if (window.confirm('Are you sure')) {
      this.bookService.deleteBook(book.idbook)
        .subscribe(() => {
          this.getAllBooks();
          console.log('Book deleted!')
        }
        )
    }
  }

}
