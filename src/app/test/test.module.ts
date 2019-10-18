import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './pages/test/test.component';
import { UIModule } from '@app/ui/ui.module';
import { QuestionComponent } from './components/question/question.component';
import { PhraseQuestionComponent } from './components/phrase-question/phrase-question.component';

@NgModule({
  declarations: [TestComponent, QuestionComponent, PhraseQuestionComponent],
  imports: [TestRoutingModule, UIModule],
  exports: [TestRoutingModule]
})
export class TestModule {}