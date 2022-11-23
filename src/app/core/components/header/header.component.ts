import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  constructor( private router: Router) { }

  onMenuView() {
    const menu = document.getElementById('menu');

    if(menu != null) {
      menu.style.display = "block";
    }
  }

  onDefibrillateursPage() {
    this.router.navigateByUrl('home/defibrillateurs');

    const menu = document.getElementById('menu');

    if(menu != null) {
      menu.style.display = "none";
    }
  }

  onCommandesPage() {
    this.router.navigateByUrl('home/commandes');

    const menu = document.getElementById('menu');

    if(menu != null) {
      menu.style.display = "none";
    }
  }
}
