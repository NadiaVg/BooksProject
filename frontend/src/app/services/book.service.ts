import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Ibook } from '../interfaces/ibook';

const httpOptiosUsingUrlEncoded = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

export class Book {
  idbook: number;
  title: string;
  volume: string;
  author: string;
  genre: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {


  endPoint: string = "http://localhost:8080/book";
  
  

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getAllBooks(){
    return this.httpClient.get<Array<Ibook>>(this.endPoint);
  }
  
  constructor(private httpClient: HttpClient) { }

  createBook(book: Book) {
    let data = new URLSearchParams();

    data.append("title", book.title)
    data.append("volume",book.volume)
    data.append("author", book.author)
    data.append("genre",book.genre)
    data.append("photo",book.photo)

   

    return this.httpClient.post(this.endPoint, data, httpOptiosUsingUrlEncoded);
  }

  

  getBook(idbook: number) {
    return this.httpClient.get<Book>(this.endPoint + '/' + idbook)
      .pipe(
        tap(_ => console.log(`Book fetched: ${idbook}`)),
        catchError(this.handleError<Book>(`Get book id=${idbook}`))
      );
  }

  
  getRandomBook(idbook): Observable<Book[]> {
    idbook.genRandom();
    return this.httpClient.get<Book[]>(this.endPoint + '/' + idbook)
      .pipe(
        tap(_ => console.log(`Book fetched: ${idbook}`)),
        catchError(this.handleError<Book[]>(`Get book id=${idbook}`))
      );
  }


  // getBooks(): Observable<Book[]> {
  //   return this.httpClient.get<Book[]>(this.endPoint)
  //     .pipe(
  //       tap(users => console.log('Books retrieved!')),
  //       catchError(this.handleError<Book[]>('Get book', []))
  //     );
  // }

  updateBook(idbook:number, book: Book): Observable<any> {
    let data = new URLSearchParams();

    data.append("title", book.title)
    data.append("volume", book.volume)
    data.append("author", book.author)
    data.append("genre", book.genre)
    data.append("photo", book.photo)

    return this.httpClient.put(this.endPoint + '/' + idbook, data, httpOptiosUsingUrlEncoded)
      .pipe(
        tap(_ => console.log(`Book updated: ${idbook}`)),
        catchError(this.handleError<Book[]>('Update book'))
      );
  }

  deleteBook(idbook): Observable<Book[]> {
    return this.httpClient.delete<Book[]>(this.endPoint + '/' + idbook, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Book deleted: ${idbook}`)),
        catchError(this.handleError<Book[]>('Delete book'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
