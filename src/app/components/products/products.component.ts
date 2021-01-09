import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/autor.model';
import { ProductsService } from 'src/app/core/services/products/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  autores;

  constructor(
    private productsService: ProductsService
  ) {
    this.autores = productsService.getAllProducts();
  }

  ngOnInit(): void {
  }

  clickedAutor(id: number): void {
    console.log(`Autor: ${ id }`);
  }

}
