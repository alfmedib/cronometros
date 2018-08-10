import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraccionCTComponent } from './fraccion-c-t.component';

describe('FraccionCTComponent', () => {
  let component: FraccionCTComponent;
  let fixture: ComponentFixture<FraccionCTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraccionCTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraccionCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
