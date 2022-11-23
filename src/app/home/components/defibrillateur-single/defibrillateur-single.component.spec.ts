import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefibrillateurSingleComponent } from './defibrillateur-single.component';

describe('DefibrillateurSingleComponent', () => {
  let component: DefibrillateurSingleComponent;
  let fixture: ComponentFixture<DefibrillateurSingleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefibrillateurSingleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefibrillateurSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
