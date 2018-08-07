import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesfibriladorComponent } from './desfibrilador.component';

describe('DesfibriladorComponent', () => {
  let component: DesfibriladorComponent;
  let fixture: ComponentFixture<DesfibriladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesfibriladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesfibriladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
