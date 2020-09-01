import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullComponent } from './full.component';

describe('FullComponent', () => {
  let component: FullComponent;
  let fixture: ComponentFixture<FullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
