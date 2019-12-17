import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { HeaderComponent } from './header/header.component';
import { MoneyBagComponent } from './money-bag/money-bag.component';

// Third party modules
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatCardModule, MatButtonModule, MatDialogModule } from '@angular/material/';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoneyBagDialogComponent } from './money-bag-dialog/money-bag-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AngularWebStorageModule } from 'angular-web-storage';
import { RegistrationService } from './services/registration.service';
import { BagRevealDialogComponent } from './bag-reveal-dialog/bag-reveal-dialog.component';
import { LastChanceComponent } from './last-chance/last-chance.component';
import { RandomBagComponent } from './random-bag/random-bag.component';
import { UserBagComponent } from './user-bag/user-bag.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoneyBagComponent,
    MoneyBagDialogComponent,
    FooterComponent,
    RegisterComponent,
    BagRevealDialogComponent,
    LastChanceComponent,
    RandomBagComponent,
    UserBagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    MatCardModule, MatButtonModule, MatDialogModule,
    FontAwesomeModule,
    HttpClientModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    AngularWebStorageModule,
    ToastrModule.forRoot()
  ],
  providers: [RegistrationService],
  entryComponents: [MoneyBagDialogComponent, BagRevealDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
