import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
})
export class PortfolioItemComponent {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {

    });
   }
}
