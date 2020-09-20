import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImeiPage } from './imei.page';

describe('ImeiPage', () => {
  let component: ImeiPage;
  let fixture: ComponentFixture<ImeiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImeiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
