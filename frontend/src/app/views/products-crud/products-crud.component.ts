import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

  constructor(
    private router: Router,
    private headerService: HeaderService
    ) {
      
    headerService.headerData = {
      title: 'Lista de Produtos',
      icon: 'storefront',
      routerUrl: ''

    }
     }

  ngOnInit(): void {
  }

}
