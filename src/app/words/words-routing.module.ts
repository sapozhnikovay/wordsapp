import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { TestComponent } from './test/test.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { EditWordsetComponent } from './edit-wordset/edit-wordset.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MainScreenComponent,
        data: { showBack: false }
      },
      {
        path: 'test/:name',
        component: TestComponent,
        data: { showBack: true }
      },
      {
        path: 'edit/:name',
        component: EditWordsetComponent,
        data: { showBack: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule {}
