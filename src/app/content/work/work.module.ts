import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WorkComponent } from './work.component';

const routes: Routes = [
  { path: '', redirectTo: 'work', pathMatch: 'full' },
  {
    path: '',
    component: WorkComponent,
    children: [
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'testimonials', component: TestimonialsComponent },
    ]
  }
];

@NgModule({
  declarations: [
    WorkComponent,
    PortfolioComponent,
    TestimonialsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class WorkModule { }
