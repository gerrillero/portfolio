import { Injectable } from '@angular/core';
import { Http } from '@angular/http' ;
import { Promise, resolve, reject } from 'q';

@Injectable()
export class ProductosService {
  productos: any[] = [];
  productos_filtrados: any[] = [];
  cargando: boolean;

  constructor(private http: Http) {
    this.load_productos();
   }

  public search_product(term: string) {

    if (this.productos.length === 0) {
      this.load_productos().then( () => {
        this.filter_products(term);
      });
    } else {
      this.filter_products(term);
    }
  }

  private filter_products(term: string) {
    this.productos_filtrados = [];
    term = term.toLowerCase();

    this.productos.forEach(prod => {
      if (prod.categoria.toLowerCase().indexOf(term) >= 0 || prod.titulo.toLowerCase().indexOf(term) >= 0) {
        this.productos_filtrados.push(prod);
      }
    });
  }

  public load_product(cod: any): any {
    return this.http.get(`https://portfolio-26b5e.firebaseio.com/productos/${cod}.json`);
  }

  public load_productos() {
    this.cargando = true;

    let promise = new Promise ( (resolve, reject) =>{

      this.http.get('https://portfolio-26b5e.firebaseio.com/productos_idx.json')
      .subscribe(response => {
        // console.log(response);

        // setTimeout(() => {
          this.productos = response.json();
          this.cargando = false;
       // }, 2000);
       resolve();

      });

      return promise;
    });

  }

}
