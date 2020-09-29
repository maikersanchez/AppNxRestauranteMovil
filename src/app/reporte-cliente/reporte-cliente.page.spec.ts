import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteClientePage } from './reporte-cliente.page';

describe('ReporteClientePage', () => {
  let component: ReporteClientePage;
  let fixture: ComponentFixture<ReporteClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
