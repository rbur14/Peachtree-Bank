import { Component, OnInit } from '@angular/core';

// data
import transactionsData from '../../data/transactions.json';

@Component({
  selector: 'transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transactions: any[] = transactionsData.data;
  fromAccountAmount: number = 5824.76;
  newTransaction: Object;
  transferIcon: string = '../../../assets/icons/transfer.png';
  showForm: boolean = true;
  deficit: boolean;

  onSubmit(form: any, transferData: any) {
    if (this.fromAccountAmount <= -500) {
      this.deficit = true;
    } else {
      let todayDate = new Date();
      this.newTransaction = {
        amount: transferData.amount,
        categoryCode: '',
        merchant: transferData.toAccount,
        merchantLogo: this.transferIcon,
        transactionDate: todayDate,
        transactionType: "Online Transfer"
      }
      this.fromAccountAmount = this.fromAccountAmount - transferData.amount;
      form.reset();
      this.showForm = false;
    }
  }

  onTransfer() {
    this.showForm = true;
    this.transactions.unshift(this.newTransaction);
  }

  reset() {
    this.fromAccountAmount = 5824.76;
    this.deficit = false;
  }

  constructor() { }

  ngOnInit() {
    this.reset();
  }

}
