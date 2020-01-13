import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'You only live once, but if you do it right, once is enough.', 'Mae West', 0, 0, new Date(2020, 3, 14)),
    new Quote(2, 'Life is what happens to us while we are making other plans.', 'Allen Saunders', 0, 0, new Date(2020, 3, 14)),
    new Quote(3, 'When we strive to become better than we are, everything around us becomes better too.', 'Kevin Saunders', 0, 0, new Date(2020, 3, 14)),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  clickCounter = 0;
  dislikeCounter = 0;
  highestCounter = 0;
  bestQuote: string;
  findHighestVotes() {
    this.highestCounter = 0;
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].clickCounter > this.highestCounter) {
        this.highestCounter = this.quotes[i].clickCounter;
        this.dislikeCounter = this.quotes[i].dislikeCounter;
        this.bestQuote = this.quotes[i].description;
      }
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  countClick(quote) {
    quote.clickCounter = quote.clickCounter + 1;
  }
  countDislike(quote) {
    quote.dislikeCounter = quote.dislikeCounter + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}

