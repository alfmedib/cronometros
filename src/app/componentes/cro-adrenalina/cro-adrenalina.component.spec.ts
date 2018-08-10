import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAdrenalinaComponent } from './cro-adrenalina.component';

describe('CroAdrenalinaComponent', () => {
  let component: CroAdrenalinaComponent;
  let fixture: ComponentFixture<CroAdrenalinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAdrenalinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAdrenalinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
