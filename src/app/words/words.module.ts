import { NgModule } from '@angular/core';

import { WordsRoutingModule } from './words-routing.module';
import { TestComponent } from './test/test.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionsService } from './shared/questions.service';
import { QuestionComponent } from './question/question.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { WordsetsService } from './shared/wordsets.service';
import { WordsetDialogComponent } from './wordset-dialog/wordset-dialog.component';
import { WordDialogComponent } from './word-dialog/word-dialog.component';
import { EditWordsetComponent } from './edit-wordset/edit-wordset.component';
import { MainScreenToolbarComponent } from './main-screen-toolbar/main-screen-toolbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { PublicListComponent } from './public-list/public-list.component';
import { PublicListDetailsComponent } from './public-list-details/public-list-details.component';
import { PhraseQuestionComponent } from './phrase-question/phrase-question.component';

@NgModule({
  imports: [SharedModule, WordsRoutingModule],
  declarations: [
    TestComponent,
    QuestionComponent,
    MainScreenComponent,
    WordsetDialogComponent,
    WordDialogComponent,
    EditWordsetComponent,
    MainScreenToolbarComponent,
    UserProfileComponent,
    LoginComponent,
    PublicListComponent,
    PublicListDetailsComponent,
    PhraseQuestionComponent
  ],
  providers: [QuestionsService, WordsetsService, AngularFireAuthGuard],
  entryComponents: [WordsetDialogComponent, WordDialogComponent, MainScreenToolbarComponent]
})
export class WordsModule {}
