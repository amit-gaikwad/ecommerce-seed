import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent} from './home/home.component';

import { HeaderComponent } from "./header/header.component";
import { CurationOfExperiencePreviewComponent } from './curation-of-experience-preview/curation-of-experience-preview.component';
import { FooterComponent } from './footer/footer.component';
import { AccommodationDynamicComponent } from './accommodation-dynamic/accommodation-dynamic.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const routes: Routes = [

  //{ path: 'accommodationv1',component:HomeComponent},

  { path: 'header', component: HeaderComponent },
  { path: "preview", component: CurationOfExperiencePreviewComponent },
  { path: "footer", component: FooterComponent },
  { path: "acco", component: AccommodationDynamicComponent },
  { path: "product", component: ProductFilterComponent },
  { path: "**", component: AccommodationDynamicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ CurationOfExperiencePreviewComponent, FooterComponent, HeaderComponent, AccommodationDynamicComponent, ProductFilterComponent

]

/**/