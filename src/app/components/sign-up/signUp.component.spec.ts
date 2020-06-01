import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { SignUpComponent } from './signUp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Routes, Router } from '@angular/router';

@Component({
    selector: 'signUpDummy'
})
class SignUpDummyComponent {}

describe('SignUpComponent', () => {
    let fixture: ComponentFixture<SignUpComponent>;
    let router: Router;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule,
                        ReactiveFormsModule, 
                        MatSnackBarModule,
                        RouterTestingModule,
                        BrowserAnimationsModule,
                        RouterTestingModule.withRoutes([{
                            path: '', component: SignUpDummyComponent
                        }])],
            declarations: [ SignUpComponent ],
            schemas: [ NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(SignUpComponent);
    });


    it('should be created', () => {
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
    describe('Register', () => {
        let component;
        beforeEach(() => {
             component = fixture.componentInstance;
             spyOn(component, 'register');
        });
        // spyOn(fixture.componentInstance, 'register').and.;
        it('should call the register when form is submited', fakeAsync(() => {
            const btn = fixture.debugElement.query(By.css('#btn-signUp'));
            btn.nativeElement.click();

            tick();
            expect(component.register).toHaveBeenCalled();
            // expect(router.navigate).toHaveBeenCalled();

        }));
    });
});

