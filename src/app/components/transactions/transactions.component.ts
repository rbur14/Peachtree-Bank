import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// data
import transactionsData from '../../data/transactions.json';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  // variables
  transactions: any[] = transactionsData.data;
  transactionSearchForm = new FormControl('');
  searchTerm: string;
  noResults: boolean = false;

  showNoResuls() {
    let listItem = document.getElementsByTagName('mat-list-item');
    // check for list items
    if (listItem.length < 1) {
      this.noResults = true;
    }
    else {
      this.noResults = false;
    }
  }

  sortTransactions(property: string) {
    let numAmount: number;
    let propA: any;
    let propB: any;
    // convert object 'amount' property to number and sort numerically
    if (property === 'amount') {
      for (let i=0; i < this.transactions.length; i++) {
        numAmount = parseFloat(this.transactions[i].amount);
        this.transactions[i].amount = numAmount;
      };
      this.transactions.sort(function(a, b){
        propA = a[property];
        propB = b[property];
        return (propA-propB)*-1;
      });
    }
    // sort alphabetically
    else {
      this.transactions.sort(function(a, b) {
        propA = a[property];
        propB = b[property];
        if (propA < propB) return -1*-1;
        if (propA > propB) return 1*-1;
        return 0;
      });
    }
  }

  searchTransactions() {
    // take in and update search input value
    this.transactionSearchForm.valueChanges.subscribe(searchTermInput => {
      this.showNoResuls();
      this.searchTerm = searchTermInput;
    });
  }

  constructor() { }

  ngOnInit() {
    this.searchTransactions();
  }

}
