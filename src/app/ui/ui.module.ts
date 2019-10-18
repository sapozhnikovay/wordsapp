import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, FontAwesomeModule, TranslocoModule],
  exports: [CommonModule, MaterialModule, RouterModule, FormsModule, FontAwesomeModule, TranslocoModule]
})
export class UIModule {}
