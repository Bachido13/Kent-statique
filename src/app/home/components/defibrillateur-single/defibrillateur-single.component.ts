import { Component, Input, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs';
import { Defibrillateur } from 'src/app/core/models/defibrillateurs.model';


@Component({
  selector: 'app-defibrillateur-single',
  templateUrl: './defibrillateur-single.component.html',
  styleUrls: ['./defibrillateur-single.component.scss'],
})


export class DefibrillateurSingleComponent implements OnInit {

  @Input()
  defibrillateur!: Defibrillateur;
  defibrillateur$!: Observable<Defibrillateur>;

  constructor() { }

  ngOnInit() {
    
    console.log(this.defibrillateur);
  }

}
