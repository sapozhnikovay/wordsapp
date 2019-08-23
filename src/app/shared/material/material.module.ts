import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatTooltipModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}
