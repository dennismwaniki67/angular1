import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'You only live once, but if you do it right, once is enough.','Mae West',new Date(2020,3,14)),
    new Quote(2,'Life is what happens to us while we are making other plans.','Allen Saunders',new Date(2020,3,14)),
    new Quote(3,'Everything you can imagine is real.','Daniel Ndambuki',new Date(2020,3,14)),
    new Quote(4,'Sometimes the questions are complicated and the answers are simple.','Pablo Picasso',new Date(2020,3,14)),
    new Quote(5,'Solve math homework','Damn Math',new Date(2020,3,14)),
    new Quote(6,'Plot my world domination plan','Daniel Ndambuki',new Date(2020,3,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

