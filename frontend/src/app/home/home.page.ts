import { Component } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  


  randomNumber;
  book: Ibook[] = [];

  constructor(private bookService: BookService) {
    this.genRandom();

    this.getBook();

    // this.getAllBooks();
  }
//  ionViewWillEnter(){

//   this.recomendation = Math.floor(Math.random() * 5);

//  }

  // getAllBooks() {
  //   this.bookService.getAllBooks().subscribe(data =>{
  //     this.books = data;
  //   })
  // }
  genRandom(){
    this.randomNumber = Math.floor(Math.random()  * 8)+1;
  }

  getBook() {
    this.bookService.getBook(this.randomNumber).subscribe(data =>{
      this.book.push(data);
      console.log(this.book)
    })
    console.log(this.book)
  }

 

  // getRandomNumber(){
  //   return Math.floor(Math.random() * 101);
  // }

// document.getElementById("recomendation").innerHTML = Math.floor(
//   Math.random() * 5
// );

}
