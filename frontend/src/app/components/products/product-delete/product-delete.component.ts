import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

product!: Product;

  constructor(
    private router: Router,
    private productServe: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productServe.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deletarProduto() {
    this.productServe.delete(this.product.id).subscribe(() => {
      this.productServe.showMessage('Produto Excluido!')
      this.router.navigate(['/products'])
    })
  }

  cancelaProduct() {
    this.router.navigate(['/products'])
  }

}
