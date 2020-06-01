import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
    imports: [ CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule
        ],
    declarations: [GalleryComponent],
    exports: [ CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        GalleryComponent
         ]
})

export class SharedModule { }
