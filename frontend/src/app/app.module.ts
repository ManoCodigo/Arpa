import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { ProductsCrudComponent } from "./views/products-crud/products-crud.component";
import { ProductsCreateComponent } from "./components/products/products-create/products-create.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ProductReadComponent } from "./components/products/product-read/product-read.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { ProductRead2Component } from "./components/products/product-read2/product-read2.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import "rxjs-compat/add/operator/map";

import localPt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ProductUpdateComponent } from "./components/products/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/products/product-delete/product-delete.component";
import { DataFormComponent } from "./data-form/data-form.component";
import { FormDebuComponent } from "./form-debu/form-debu.component";
registerLocaleData(localPt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsCrudComponent,
    ProductsCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    DataFormComponent,
    TemplateFormComponent,
    FormDebuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "legacy" },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
