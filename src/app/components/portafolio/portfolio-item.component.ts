import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
})
export class PortfolioItemComponent {
  producto: any;
  cod: string;

  constructor(private route: ActivatedRoute, _ps: ProductosService) {
    route.params.subscribe(params => {
        _ps.load_product(params['id']).subscribe(res => {
            this.cod = params['id'];
            this.producto = res.json();
        });
    });
   }
}
