import { ContactFormPageComponent } from './contact-form-page/contact-form-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'contact', component: ContactFormPageComponent,
data:{animation: 'ContactPage'} },
  { path: 'about', component: AboutPageComponent,
  data:{animation: 'AontactPage'} },
  { path: 'portfolio', component: PortfolioPageComponent,
  data:{animation: 'PortfoliotPage'} }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
