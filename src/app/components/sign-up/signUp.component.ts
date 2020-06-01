import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MyErrorStateMatcher } from '../utils/errorStateMatcher';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
    selector: 'app-sign-up',
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.css']
})

export class SignUpComponent {
    public myErrorStateMatcher = new MyErrorStateMatcher();
    constructor( private fb: FormBuilder,
                 private snackBar: MatSnackBar,
                 private router: Router) {}

    public signUpForm: FormGroup = this.fb.group({
        name: ['', [Validators.required , Validators.minLength(6)]],
        documentType: ['', [Validators.required]],
        document: ['', [Validators.required]],
        email: ['', [Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmedPassword: ['', [Validators.required]]
    }, { validators: [this.confirmedValidation(), this.validateDocument()]});



    public confirmedValidation(): ValidatorFn {
        return (control: FormGroup): ValidationErrors | null => {
            const confirmPassword = control.get('confirmedPassword').value;
            const password = control.get('password').value;
            return (password !== confirmPassword) ? { confirmedPassword: true } : null;
        };
    }

    public validateDocument(): ValidatorFn {
        return (control: FormGroup): ValidationErrors | null => {
            const documentType =  control.get('documentType').value;
            const document = control.get('document').value;

            switch (documentType) {
                case 'cc':
                    return (document.length !== 10) ? { documentInvalid: true } : null;
                default:
                    return null;
            }
        }
    }
    public register() {
        const user = this.signUpForm.value;
        delete user.confirmedPassword;
        localStorage.setItem('user', JSON.stringify(user));
        this.signUpForm.reset();
        this.snackBar.open('Se a creado el usuario correctamente', '', { duration: 2000 });
        this.router.navigate(['/login']);
    }
}