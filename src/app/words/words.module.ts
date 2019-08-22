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

@NgModule({
  imports: [SharedModule, WordsRoutingModule],
  declarations: [TestComponent, QuestionComponent, MainScreenComponent, WordsetDialogComponent, WordDialogComponent, EditWordsetComponent],
  providers: [QuestionsService, WordsetsService],
  entryComponents: [WordsetDialogComponent, WordDialogComponent]
})
export class WordsModule {}
