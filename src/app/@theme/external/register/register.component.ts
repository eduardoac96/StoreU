import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'; 
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { UserService } from '../../../shared/services/user.service';
import { UserRegister } from '../../../models/user/user-register.model';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  showDetails: boolean;
  private registerSubscription: Subscription;

  @ViewChild('passwordComponentWithConfirmation', { static: true })
  passwordComponentWithConfirmation: MatPasswordStrengthComponent;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.registerSubscription){
      this.registerSubscription.unsubscribe();
    }
  }
  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

  public register(registerForm: NgForm): void {
    if(!registerForm.valid){
      return;
    }
 
    const user: UserRegister = automapper.map('RegisterForm', 'UserRegister', registerForm.value);

  this.registerSubscription = this.userService.register(user).subscribe(response => {
      if(response){
        swal.fire("Message","Gracias por unirte a Store U.", "success");
        this.router.navigate(['/dashboard']);

      }
  });

  }

}
