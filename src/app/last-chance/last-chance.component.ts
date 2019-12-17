import { Component, OnInit } from '@angular/core';
import { MoneyBagService } from '../services/money-bag.service';
import { RegistrationService } from '../services/registration.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-last-chance',
  templateUrl: './last-chance.component.html',
  styleUrls: ['./last-chance.component.scss']
})
export class LastChanceComponent implements OnInit {

  randomSelectedBag: BagsInterface;
  selectedBag: BagsInterface;
  allBags: any;
  user: any;
  constructor( private moneyBagService: MoneyBagService,
               private authentication: RegistrationService,
               public local: LocalStorageService) { }

  ngOnInit() {
    this.user = this.local.get('userAuthentication');
    this.moneyBagService.allMoneybags.subscribe((appBags: any) => {
      this.allBags = appBags;
      console.log(appBags);
      this.getBagsData(appBags);
    });
  }

  getBagsData(appBags) {
    this.moneyBagService.randomMoneyBag.subscribe((randomBag: any) => {
      console.log(randomBag);
      this.randomSelectedBag = this.getMoneyBagData(appBags, randomBag);
    });

    this.moneyBagService.selectedMoneyBag.subscribe((userBag: any) => {
      console.log(userBag);
      this.selectedBag = this.getMoneyBagData(appBags, userBag);
      console.log(this.selectedBag);
    });
  }

  getMoneyBagData(allMoneyBags: any, moneyBagID: string) {
    const result = [];
    allMoneyBags.forEach((moneyBag) => {
      if (moneyBag.bag_id === moneyBagID) {
        result.push(moneyBag);
      }
    });
    return result ? result[0] : null; // or undefined
  }

}

export interface BagsInterface {
  money: number;
  bag_id: string;
  bag: string;
  bag_number: number;
}
