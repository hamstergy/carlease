import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CatalogComponent} from './catalog/catalog.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {CategoryComponent} from './catalog/category/category.component';
import {ModelComponent} from './catalog/model/model.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars', component: CatalogComponent, children: [
      {path: ':slug', component: CategoryComponent}
    ]},
  {path: 'cars/:makeSlug/:modelSlug', component: ModelComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
