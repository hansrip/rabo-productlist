import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './productview/productview.component';
import { ProductViewService } from './services/productview.service';
import { BackendService } from './services/backend.service';
import { ProductViewMapper } from './services/productviewmapper.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ProductViewComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl'},
    BackendService,
    ProductViewService,
    ProductViewMapper
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
