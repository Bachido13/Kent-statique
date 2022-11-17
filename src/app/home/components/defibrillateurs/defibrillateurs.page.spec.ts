import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefibrillateursPage } from './defibrillateurs.page';

describe('HomePage', () => {
  let component: DefibrillateursPage;
  let fixture: ComponentFixture<DefibrillateursPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefibrillateursPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefibrillateursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
