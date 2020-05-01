import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'quiz', component: QuizPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
