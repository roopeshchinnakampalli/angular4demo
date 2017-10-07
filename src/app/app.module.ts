import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ContactComponent } from './contact.component';
import { ProductService } from './product.service';

//Service
import { MyData } from './services/data.service';
import { CatalogService } from './services/catalog.service';

//Directive
import { MyHighlighterDirective } from './directives/highlighter.directive';

//Pipe
import { MyCurrency } from './pipes/currency.pipe';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, 
                  ProductDetailComponent, 
                  ProductsComponent, 
                  DashboardComponent, 
                  ContactComponent, 
                  MyCurrency, 
                  MyHighlighterDirective
                  ],
  providers: [ ProductService, MyData, CatalogService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


