/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { } from 'automapper-ts';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { LayoutService } from './shared/services/layout.service';
import { LoginComponent } from './@theme/external/login/login.component';
import { RegisterComponent } from './@theme/external/register/register.component';
import { ForgotResetComponent } from './@theme/external/forgot/forgot-reset/forgot-reset.component';
import { ForgotComponent } from './@theme/external/forgot/forgot.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatPasswordStrengthModule,

    ThemeModule.forRoot(), 
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    MatPasswordStrengthModule,
  ],
  providers: [LayoutService]
  ,
  bootstrap: [AppComponent],
})
export class AppModule {
 
  constructor() {
    automapper.createMap('RegisterForm', 'UserRegister');
    automapper.createMap('LoginForm', 'UserLogin');
    automapper.createMap('confirmPasswordForm', 'UserChangePassword');    
  }


}
