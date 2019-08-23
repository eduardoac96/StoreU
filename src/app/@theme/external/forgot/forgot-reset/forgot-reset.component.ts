import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms'; 
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material'; 

import swal from 'sweetalert2';
import { AuthService } from '../../../../shared/services/auth.service';
import { UserChangePassword } from '../../../../models/user/user-changePassword.model';

@Component({
  selector: 'app-forgot-reset',
  templateUrl: './forgot-reset.component.html',
  styleUrls: ['./forgot-reset.component.scss']
})
export class ForgotResetComponent implements OnInit {
  showDetails: boolean;
 
  @ViewChild('passwordComponentWithConfirmation', { static: true })
  passwordComponentWithConfirmation: MatPasswordStrengthComponent;

  private forgotSubscription: Subscription;
  private userToken: string;

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
    this.userToken = this.activatedRoute.snapshot.paramMap.get("id")
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.forgotSubscription) {
      this.forgotSubscription.unsubscribe();
    }
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

  public reset(confirmPasswordForm: NgForm): void {

    if (!confirmPasswordForm.valid) {
      return;
    }

    const model: UserChangePassword = automapper.map('confirmPasswordForm', 'UserChangePassword', confirmPasswordForm.value);

    model.userToken = this.userToken;

    this.forgotSubscription = this.authService.setPassword(model).subscribe(response => {
      if (response) {
 

        swal.fire("Message",response, "success");



        this.router.navigate(['/login']);
      }
    });
 
  }

  


}
