import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddQrImagesPage } from './add-qr-images.page';

describe('AddQrImagesPage', () => {
  let component: AddQrImagesPage;
  let fixture: ComponentFixture<AddQrImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQrImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddQrImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
