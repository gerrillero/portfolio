import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  constructor(public _is: InformationService) {}
}
