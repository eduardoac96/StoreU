import { CommonModule } from "@angular/common"; 
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './logout-routing.module'; 
import { SharedMaterialModule } from '../../../shared/shared.material.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule, 
        SharedMaterialModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent]

})

export class LoginModule{}