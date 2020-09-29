import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteCamareroPage } from './reporte-camarero.page';

describe('ReporteCamareroPage', () => {
  let component: ReporteCamareroPage;
  let fixture: ComponentFixture<ReporteCamareroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteCamareroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteCamareroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
