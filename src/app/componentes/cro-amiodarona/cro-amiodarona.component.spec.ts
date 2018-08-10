import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAmiodaronaComponent } from './cro-amiodarona.component';

describe('CroAmiodaronaComponent', () => {
  let component: CroAmiodaronaComponent;
  let fixture: ComponentFixture<CroAmiodaronaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAmiodaronaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAmiodaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
