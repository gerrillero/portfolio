import { Injectable } from '@angular/core';
import { Http } from '@angular/http' ;

@Injectable()
export class ProductosService {
  productos: any[] = [];
  cargando: boolean = true;

  constructor(private http: Http) {
    this.load_productos();
   }

  load_productos(): any {
    this.http.get('https://portfolio-26b5e.firebaseio.com/productos_idx.json')
      .subscribe(response => {
        // console.log(response);
        this.productos = response.json();
        this.cargando = false;
      });
  }

}
