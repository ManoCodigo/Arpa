import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    // private product: Product
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado!')
      this.router.navigate(['/products'])
    })
  }

  cancelaProduct() {
    this.router.navigate(['/products'])
    this.productService.showMessage('Alteração do Produto Cancelado!')
  }

}
