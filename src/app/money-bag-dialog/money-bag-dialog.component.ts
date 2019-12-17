import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { BagRevealDialogComponent } from '../bag-reveal-dialog/bag-reveal-dialog.component';

export interface DialogData {
  randomSelection: string;
  userSelection: string;
  moneyBags: any;
  userName: string;
}

@Component({
  selector: 'app-money-bag-dialog',
  templateUrl: './money-bag-dialog.component.html',
  styleUrls: ['./money-bag-dialog.component.scss']
})
export class MoneyBagDialogComponent implements OnInit {
  machineSelection: BagsInterface;
  userSelected: BagsInterface;
  chosenBag: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.machineSelection = this.getMoneyBagData(this.data.moneyBags, this.data.randomSelection);
    this.userSelected = this.getMoneyBagData(this.data.moneyBags, this.data.userSelection);
  }

  getMoneyBagData(moneyBagObject: any, moneyBagID: string) {
    const result = [];
    moneyBagObject.forEach((o) => {
      if (o.bag_id === moneyBagID) {
        result.push(o);
      }
    });
    return result ? result[0] : null; // or undefined
  }

  revealBagValue(selectedMoneyBag: string): void {
    this.chosenBag = this.getMoneyBagData(this.data.moneyBags, selectedMoneyBag);
    console.log(this.chosenBag);
    this.dialog.open(BagRevealDialogComponent, {
      width: '700px',
      data: {
        moneyBagResults: this.chosenBag,
        userName: this.data.userName
      }
    });
  }

}

export interface BagsInterface {
  money: number;
  bag_id: string;
  bag: string;
  bag_number: number;
}
