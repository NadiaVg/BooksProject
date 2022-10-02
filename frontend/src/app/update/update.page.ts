import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateBookFg: FormGroup;
  idbook: any;

  constructor(
    private BookService: BookService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.idbook = this.activatedRoute.snapshot.paramMap.get('idbook');
  }

  ngOnInit() {
    this.fetchBook(this.idbook);
    this.updateBookFg = this.formBuilder.group({
      title: [''],
      volume: [''],
      author: [''],
      genre: [''],
      photo: ['']
    })
  }

  fetchBook(idbook: number) {
    console.log(this.BookService.getBook(idbook))
    this.BookService.getBook(idbook).subscribe((data) => {
      this.updateBookFg.setValue({
        title: data['title'],
        volume: data['volume'],
        author: data['author'],
        genre: data['genre'],
        photo: data['photo']

      });
    });
  }

  onSubmit() {
    if (!this.updateBookFg.valid) {
      return false;
    } else {
      this.BookService.updateBook(this.idbook, this.updateBookFg.value)
        .subscribe(() => {
          this.updateBookFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}