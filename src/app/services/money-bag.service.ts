import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyBagService {
  selectedMoneyBag = new Subject<any>();
  randomMoneyBag = new Subject<any>();
  allMoneybags = new Subject<any>();
  userName = new Subject<any>();

  constructor() { }

  getSelectedMoneyBag(selectedBag) {
    this.selectedMoneyBag.next(selectedBag);
  }

  getRandomMoneyBag(randomBag) {
    this.randomMoneyBag.next(randomBag);
  }

  getAllMoneyBags(allBags) {
    this.allMoneybags.next(allBags);
  }

  dumpSubjectData() {
    this.randomMoneyBag.subscribe((data: string) => {
      console.log('Dump: ' + data);
    });
  }

}
