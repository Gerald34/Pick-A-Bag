import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../services/registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authorized = true;
  constructor(private authorization: RegistrationService) { }

  ngOnInit() {
    this.authorization.getUserInformation.subscribe((response: any) => {
      if (response !== null || response !== 'undefined') {
        setTimeout(() => {
          this.authorized = true;
        }, 2000);
      }
    });
  }

}
