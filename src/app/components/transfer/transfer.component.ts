import { Component, OnInit } from '@angular/core';

// data
import transactionsData from '../../data/transactions.json';

@Component({
  selector: 'transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  // variables
  transactions: any[] = transactionsData.data;
  fromAccountAmount: number = 5824.76;
  newTransaction: Object;
  transferIcon: string = '../../../assets/icons/transfer.png';
  showForm: boolean = true;
  deficit: boolean;

  onSubmit(form: any, transferData: any) {
    // check for insufficient funds
    if (this.fromAccountAmount <= -500) {
      this.deficit = true;
    } else {
      // store form data in object
      let todayDate = new Date();
      this.newTransaction = {
        amount: transferData.amount,
        categoryCode: '',
        merchant: transferData.toAccount,
        merchantLogo: this.transferIcon,
        transactionDate: todayDate,
        transactionType: "Online Transfer"
      }
      // update from account amount, reset form, show confirm screen
      this.fromAccountAmount = this.fromAccountAmount - transferData.amount;
      form.reset();
      this.showForm = false;
    }
  }

  onTransfer() {
    // show form and add new transaction to list
    this.showForm = true;
    this.transactions.unshift(this.newTransaction);
  }

  reset() {
    // restore app initial state
    this.fromAccountAmount = 5824.76;
    this.deficit = false;
  }

  constructor() { }

  ngOnInit() {
    this.reset();
  }

}
