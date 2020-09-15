import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactionoptionsPage } from './transactionoptions.page';

describe('TransactionoptionsPage', () => {
  let component: TransactionoptionsPage;
  let fixture: ComponentFixture<TransactionoptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionoptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionoptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
