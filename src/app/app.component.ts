import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  osoba = {
    imie: '',
    nazwisko: '',
    telefon: null,
    email: '',
    odbiorca: '',
  };

  constructor() {}

  ngOnInit(): void {}

  NowaOsoba() {}
  onSubmit() {
    console.log('submitted! ' + this.osoba.email);
  }
}
