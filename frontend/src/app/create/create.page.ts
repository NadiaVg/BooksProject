import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { BookService } from './../services/book.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  bookForm: FormGroup;
  name = "";
  photo = ""

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private bookService: BookService  
  ) {
    this.bookForm = this.formBuilder.group({
      title: [''],
      volume: [''],
      author: [''],
      genre: [''],
      photo: ['']
    })
  }
  
  onFileSelected(event) {
    if(event.target.file.length > 0){
      this.name = event.target.files[0].name;
    }
  }
  ngOnInit() { 
  }
  onSubmit() {
    if (!this.bookForm.valid) {
      return false;
    } else {
      this.bookService.createBook(this.bookForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.bookForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }
}