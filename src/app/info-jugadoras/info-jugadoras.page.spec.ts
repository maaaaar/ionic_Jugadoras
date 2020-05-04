import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoJugadorasPage } from './info-jugadoras.page';

describe('InfoJugadorasPage', () => {
  let component: InfoJugadorasPage;
  let fixture: ComponentFixture<InfoJugadorasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoJugadorasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoJugadorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
