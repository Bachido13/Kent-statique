import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  constructor( private router: Router) { }

  onDefibrillateursPage() {
    this.router.navigateByUrl('home/defibrillateurs')
  }

  onCommandesPage() {
    this.router.navigateByUrl('home/commandes')
  }
}
