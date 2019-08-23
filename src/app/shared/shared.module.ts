import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LayoutModule } from '@angular/cdk/layout';
import { SharedMaterialModule } from './shared.material.module';  
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'; 

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddAuthorizationHeaderInterceptor } from './helpers/add-authorization-header-interceptor';
import { AddAcceptHeaderInterceptor } from './helpers/add-accept-header-interceptor';
import { HandleHttpErrorInterceptor } from './helpers/handle-http-error-interceptor';
import { GlobalErrorHandler } from './helpers/global-error-handler';

 @NgModule({ 
  imports: [
    CommonModule,
    LayoutModule,
    SharedMaterialModule, 
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    SweetAlert2Module
  ],
  exports: [FormsModule, SweetAlert2Module, FlexLayoutModule],
  providers: [AuthService,UserService, GlobalErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthorizationHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAcceptHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleHttpErrorInterceptor,
      multi: true
    }
  
  ]
})
export class SharedModule { }
