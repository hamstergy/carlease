import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    CatalogComponent
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
