import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product = {
    name: '',
    price: null
  }
 

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productsService.create(this.product).subscribe(() => {
      this.productsService.showMessage('Produto Criado!')
      this.router.navigate(['/products'])
    })

      
  }

  cancelaProduct(){
    this.router.navigate(['/products'])
  }

}
