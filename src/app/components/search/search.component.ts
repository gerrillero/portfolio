import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  term: string;

  constructor(private route: ActivatedRoute, public _ps: ProductosService) {
    route.params.subscribe(params => {
        this.term = params['term'];
        // console.log(this.term);
        _ps.search_product(this.term);
    });
   }

}
