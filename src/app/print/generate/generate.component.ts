import { Component, OnInit } from '@angular/core';

interface Card {
  word: string;
  imageUrl: string;
}

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  cards: Card[] = [
    { word: 'Cat', imageUrl: 'https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg' },
    { word: 'Dog', imageUrl: 'https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg' },
    { word: 'Fish', imageUrl: 'https://www.teclasap.com.br/wp-content/uploads/2014/09/fish.jpg' },
    { word: 'Cat', imageUrl: 'https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg' },
    { word: 'Dog', imageUrl: 'https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg' },
    { word: 'Fish', imageUrl: 'https://www.teclasap.com.br/wp-content/uploads/2014/09/fish.jpg' },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
