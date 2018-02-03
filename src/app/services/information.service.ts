import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {

  info: any = {};
  info_loaded: boolean = false;

  constructor(private http: Http) {
    this.http.get('assets/data/info.pagina.json')
    .subscribe(data => {
      console.log(data.json());
      this.info_loaded = true;
      this.info = data.json();
    });
   }

}
