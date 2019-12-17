import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-bag',
  templateUrl: './user-bag.component.html',
  styleUrls: ['./user-bag.component.scss']
})
export class UserBagComponent implements OnInit {
  @Input() selectedBag: any;
  constructor() { }

  ngOnInit() {
  }

}
