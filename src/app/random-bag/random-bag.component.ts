import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-random-bag',
  templateUrl: './random-bag.component.html',
  styleUrls: ['./random-bag.component.scss']
})
export class RandomBagComponent implements OnInit {
  @Input() randomSelectedBag: any;
  constructor() { }

  ngOnInit() {
    console.log(this.randomSelectedBag);
  }

}
