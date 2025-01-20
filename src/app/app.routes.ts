import { Routes, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DetailsComponent } from './Components/details/details.component';

export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'Home'},
  {path:'Home',component:HomeComponent},
  {path:'Details/:id',component:DetailsComponent},
  {path:'Products',component:ProductsComponent},
  {path:'About',component:AboutusComponent},
  {path:'**',component:NotFoundComponent}
];
