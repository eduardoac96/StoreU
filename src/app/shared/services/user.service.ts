import { Subject, Observable, throwError } from 'rxjs';

import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { AuthService } from './auth.service'; 
import { UserRegister } from '../../models/user/user-register.model';
import { UserDisplay } from '../../models/user/user-display.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends BaseService {
    constructor(private http:HttpClient, private snackBar: MatSnackBar, private authService: AuthService){
        super();
    }

    public register(userRegister: UserRegister) : Observable<boolean> {
        
        return this.http.post(`${this.apiUrl}user/register`, userRegister)
                 .pipe(map((user: UserRegister) => {

                    debugger
                    const isValidResponse = user && user.userId;

                    if(isValidResponse){

                        let userDisplay: UserDisplay = new UserDisplay();

                        userDisplay.userId = user.userId;
                        userDisplay.displayName = user.firstName;
                        userDisplay.username = user.userName;
                        userDisplay.role = user.roleName;

                        this.authService.setUser(userDisplay);
                    } 

                    return !!isValidResponse;
                 })
            );
    }

}