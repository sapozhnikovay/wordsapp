import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { TestComponent } from '@app/test/pages/test/test.component';
import { PhraseQuestionComponent } from './components/phrase-question/phrase-question.component';

const TEST_ROUTES = [
  {
    path: 'test',
    component: MainLayoutComponent,
    children: [
      {
        path: ':name',
        component: TestComponent,
        data: { showBackButton: true }
      }
    ]
  },
  {
    path: 'phrase',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PhraseQuestionComponent,
        data: { showBackButton: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(TEST_ROUTES)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
