import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:'' , redirectTo:'/carousel' , pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'carousel' , title:'Welcome page' , component: CarouselComponent},
  {path:'portfolio' , title:'portfolio page' , component: PortfolioComponent},
  {path:'services' , title:'Service page' , component: ServicesComponent},
  {path:'about' , title:'About page' , component: AboutComponent},
  {path:'contact' , title:'Contact page' , component: ContactComponent},
  {path:'**' , title:'Pagenotfound' , component: PagenotfoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
