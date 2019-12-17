import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogData} from '../money-bag-dialog/money-bag-dialog.component';
import {LocalStorageService} from 'angular-web-storage';
import {Router} from '@angular/router';

export interface DialogData {
  moneyBagResults: any;
  userName: string;
}

@Component({
  selector: 'app-bag-reveal-dialog',
  templateUrl: './bag-reveal-dialog.component.html',
  styleUrls: ['./bag-reveal-dialog.component.scss']
})
export class BagRevealDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private local: LocalStorageService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  playAgain() {
    this.router.navigate(['pickabag']);
  }

  onNoClick() {
    this.local.clear();
    this.router.navigate(['']);
  }

}
