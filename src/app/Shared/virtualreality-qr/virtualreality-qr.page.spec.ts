import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirtualrealityQRPage } from './virtualreality-qr.page';

describe('VirtualrealityQRPage', () => {
  let component: VirtualrealityQRPage;
  let fixture: ComponentFixture<VirtualrealityQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualrealityQRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirtualrealityQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
