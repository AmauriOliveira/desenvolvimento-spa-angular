import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import html2pdf from "html2pdf.js";

interface Card {
  word: string;
  imageUrl: string;
}

@Component({
  selector: "app-generate",
  templateUrl: "./generate.component.html",
  styleUrls: ["./generate.component.scss"],
})
export class GenerateComponent implements OnInit {
  @ViewChild("draw") printedDiv: ElementRef;

  config = {
    html2canvas: {
      scale: 1,
      scrollX: 0,
      scrollY: 0,
      dpi: 300,
      letterRendering: true,
      useCORS: true,
    },
  };

  cards: Card[] = [
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Fish", imageUrl: "https://i.imgur.com/Py92CjB.png" },
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Crow", imageUrl: "https://i.imgur.com/kHGgWes.jpg" },
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Fish", imageUrl: "https://i.imgur.com/Py92CjB.png" },
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Crow", imageUrl: "https://i.imgur.com/kHGgWes.jpg" },
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Fish", imageUrl: "https://i.imgur.com/Py92CjB.png" },
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Crow", imageUrl: "https://i.imgur.com/kHGgWes.jpg" },
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Fish", imageUrl: "https://i.imgur.com/Py92CjB.png" },
    {
      word: "Cat",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/03/cat-facts-758x505.jpg",
    },
    {
      word: "Dog",
      imageUrl:
        "https://socialcute.co/wp-content/uploads/2020/09/sad-dog-looking-at-tomato.jpg",
    },
    { word: "Crow", imageUrl: "https://i.imgur.com/kHGgWes.jpg" },
  ];

  constructor() { }

  ngOnInit(): void { }

  private print(content: any, config: any): void {
    html2pdf().set(config).from(content).toPdf().outputPdf("dataurlnewwindow");
  }

  onPrint() {
    this.print(this.printedDiv.nativeElement, this.config);
  }
}
