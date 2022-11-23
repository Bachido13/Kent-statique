import { Component, OnInit } from '@angular/core';
import { Defibrillateur } from '../../../core/models/defibrillateurs.model';
import { DefibrillateursService } from '../../../core/services/defibrillateurs.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-defibrillateurs',
  templateUrl: 'defibrillateurs.page.html',
  styleUrls: ['defibrillateurs.page.scss'],
})
export class DefibrillateursPage implements OnInit{

  defibrillateurs$!: Observable<Defibrillateur[]>;
  errorMsg!: string;


  constructor(private defibrillateurService: DefibrillateursService) {}

  ngOnInit(): void {

    //this.defibrillateurs$ = this.defibrillateurService.defibrillateurs$;
   // this.defibrillateurService.getAlldefibrillateurs();
    console.log(this.defibrillateurs$);

    fetch("http://localhost:3000/api/defibrillateur")
    .then(function (res) {
      return res.json();
    })
    .then(function (defibrillateurs) {
      const defibrillateurList = document.getElementById('list');

      let innerHtml = "";

      for (let i = 0; i < defibrillateurs.length; i++) {

        const defibrillateurItem = defibrillateurs[i];

        innerHtml += `
        <div>
          <section class="infos">
            <h3>
              <strong>${defibrillateurItem.serial}</strong>
            </h3>
            <p>
              <strong>${defibrillateurItem.locationName},</strong><br>
              ${defibrillateurItem.locationAddr}
            </p>
          </section>
          <section class="icone">
            <img src="../../../../assets/icon/icon_check.png" alt="icone check">
          </section>
        </div>`
      }

    })
    
  }
}
