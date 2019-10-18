import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { UIModule } from '@app/ui/ui.module';

@NgModule({
  declarations: [MainLayoutComponent, MainToolbarComponent],
  imports: [CommonModule, UIModule],
})
export class LayoutModule {}
