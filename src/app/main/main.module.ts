import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { UIModule } from '@app/ui/ui.module';
import { WordsetDialogComponent } from './components/wordset-dialog/wordset-dialog.component';
import { WordDialogComponent } from './components/word-dialog/word-dialog.component';
import { MainScreenToolbarComponent } from './components/main-screen-toolbar/main-screen-toolbar.component';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { EditWordsetComponent } from './pages/edit-wordset/edit-wordset.component';
import { PublicListComponent } from './pages/public-list/public-list.component';
import { PublicListDetailsComponent } from './pages/public-list-details/public-list-details.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

@NgModule({
  imports: [MainRoutingModule, UIModule],
  exports: [MainRoutingModule],
  declarations: [MainScreenComponent, WordsetDialogComponent, WordDialogComponent, EditWordsetComponent, MainScreenToolbarComponent, PublicListComponent, PublicListDetailsComponent],
  providers: [AngularFireAuthGuard],
  entryComponents: [WordsetDialogComponent, WordDialogComponent, MainScreenToolbarComponent]
})
export class MainModule {}
