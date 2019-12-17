import { Injectable, Inject } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  getUserInformation = new Subject<any>();

  constructor( public local: LocalStorageService) { }

  userRegistration(userEmail: string, userName: string) {
    this.local.set('userAuthentication', { email: userEmail, name: userName });
    this.userAuth();
  }

  clearAuthentication(): void {
    this.local.clear();
    this.getUserInformation.next(this.local.get('userAuthentication'));
  }

  userAuth() {
    this.getUserInformation.next(this.local.get('userAuthentication'));
  }

}
