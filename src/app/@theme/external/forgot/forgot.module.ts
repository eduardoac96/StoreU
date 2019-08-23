import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ForgotComponent } from './forgot.component';
import { ForgotRoutingModule } from './forgot-routing.module';  
import { ForgotResetComponent } from './forgot-reset/forgot-reset.component'; 
import { SharedMaterialModule } from '../../../shared/shared.material.module';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({ 
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    ForgotRoutingModule
  ],
  declarations: [ForgotComponent,  ForgotResetComponent]
})
export class ForgotModule { }
