import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CatalogComponent} from './catalog/catalog.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {CategoryComponent} from './catalog/category/category.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'make', component: CatalogComponent, children: [
      {path: ':slug', component: CategoryComponent}
    ]},
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
