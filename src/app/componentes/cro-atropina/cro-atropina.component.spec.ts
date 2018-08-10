import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAtropinaComponent } from './cro-atropina.component';

describe('CroAtropinaComponent', () => {
  let component: CroAtropinaComponent;
  let fixture: ComponentFixture<CroAtropinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAtropinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAtropinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
