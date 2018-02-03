import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {
  info: any = {};
  info_loaded: boolean = false;
  team: any[] = [];
  team_loaded: boolean = false;

  constructor(private http: Http) {
    if (!this.info_loaded) {
      this.load_info();
    }
    if (!this.team_loaded) {
      this.load_team();
    }

  }

  private load_info() {
    this.http.get('assets/data/info.pagina.json').subscribe(data => {
      this.info_loaded = true;
      this.info = data.json();
    });
  }

  private load_team() {
    this.http.get('https://portfolio-26b5e.firebaseio.com/team.json').subscribe(data => {
      this.team_loaded = true;
      this.team = data.json();
    });
  }
}
