import { Injectable } from '@angular/core';
import { Http } from '@angular/http' ;

@Injectable()
export class ProductosService {
  productos: any[] = [];
  cargando: boolean;

  constructor(private http: Http) {
    this.load_productos();
   }

  load_productos(): any {
    this.cargando = true;

    this.http.get('https://portfolio-26b5e.firebaseio.com/productos_idx.json')
      .subscribe(response => {
        // console.log(response);

        //setTimeout(() => {
          this.productos = response.json();
          this.cargando = false;
       // }, 2000);

      });
  }

}
