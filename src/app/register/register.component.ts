import { Component, OnInit } from '@angular/core';
import { RegistrationService} from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authentication: RegistrationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  authenticateUser(email: string, name: string) {
    this.authentication.userRegistration(email, name);
    setTimeout(() => {
      this.router.navigate(['pickabag']);
    }, 2000);
  }

}
