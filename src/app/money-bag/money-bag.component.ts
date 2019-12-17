import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoneyBagDialogComponent } from '../money-bag-dialog/money-bag-dialog.component';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-money-bag',
  templateUrl: './money-bag.component.html',
  styleUrls: ['./money-bag.component.scss']
})
export class MoneyBagComponent implements OnInit, OnDestroy {
  userInformation: any;
  minValue = 500;
  maxValue = 250000;
  bags: any;
  randomBagSelected: BagsInterface;

  constructor( public dialog: MatDialog, private local: LocalStorageService, public router: Router,
               private toastr: ToastrService) {
  }

  ngOnInit() {
    this.userInformation = this.local.get('userAuthentication');
    if (this.userInformation === null || typeof this.userInformation.email === 'undefined' || this.userInformation.email === '') {
      this.router.navigate(['']);
    }
    this.fillBagsWithMoney();
  }

  ngOnDestroy() {
    this.fillBagsWithMoney();
  }

  shuffleSet() {
    this.bags = this.shuffle(this.bags);
  }

  shuffle(arraySet) {
    let ctr = arraySet.length;
    let temp;
    let index;
    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arraySet[ctr];
      arraySet[ctr] = arraySet[index];
      arraySet[index] = temp;
    }
    return arraySet;
  }

  openDialog(randomBagSelected, selectedMoneyBag): void {
    this.toastr.success('Choose between your bag or the lucky bag we chose for you!', 'Grand Chance!', {
      closeButton: true
    });

    this.dialog.open(MoneyBagDialogComponent, {
      width: '700px',
      data: {
        randomSelection: randomBagSelected,
        userSelection: selectedMoneyBag,
        moneyBags: this.bags,
        userName: this.userInformation.name
      }
    });
  }

  fillBagsWithMoney() {
    this.bags = [
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'VSKYRL',
        bag_number: 1
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'V2QQH7',
        bag_number: 2
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'Q6EOBN',
        bag_number: 3
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'EHZQPK',
        bag_number: 4
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'XVBQ7B',
        bag_number: 5
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: '8GIT89',
        bag_number: 6
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'FMI3ER',
        bag_number: 7
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: '5IE7SZ',
        bag_number: 8
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'ZY1RMR',
        bag_number: 9
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'CLLWY0',
        bag_number: 10
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'VCMH6U',
        bag_number: 11
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'VATW6D',
        bag_number: 12
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'S1SJ2H',
        bag_number: 13
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'G0NZPS',
        bag_number: 14
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'AS0W86',
        bag_number: 15
      },
      {
        money: this.getRandomInt(this.minValue, this.maxValue),
        bag: '../../assets/images/cash.jpg',
        bag_id: 'M1IDAI',
        bag_number: 16
      },
    ];
  }

  pickRandomBag(bagsArray: any, selectedMoneyBag: string): void {
    this.randomBagSelected = bagsArray[Math.floor(Math.random() * bagsArray.length)];
    this.openDialog(this.randomBagSelected.bag_id, selectedMoneyBag);
    this.fillBagsWithMoney();
  }

  pickThisBag(event): void {
    this.pickRandomBag(this.bags, event.id);
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (max - min + 1)) + min;
  }

}

export interface BagsInterface {
  money: number;
  bag_id: string;
  bag: string;
  bag_number: number;
}

