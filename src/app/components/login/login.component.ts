import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../utils/errorStateMatcher';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    public hide = true;
    public myErrorStateMatcher = new MyErrorStateMatcher();
    constructor( private fb: FormBuilder,
                 private snackBar: MatSnackBar,
                 private router: Router) {}

    public loginForm: FormGroup = this.fb.group({
        email: ['', [Validators.required,
                Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });


    public login() {
        const user = this.loginForm.value;
        const userDB = JSON.parse(localStorage.getItem('user'));

        if (userDB) {
            if (userDB.email === user.email && userDB.password === user.password) {
                this.loginForm.reset();
                return this.router.navigate(['/home']);
            }
        }
        return this.snackBar.open('Usuario o contraseña invalidos.', '', { duration: 3000 });
    }
}
