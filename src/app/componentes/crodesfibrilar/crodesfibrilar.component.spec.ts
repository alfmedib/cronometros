import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrodesfibrilarComponent } from './crodesfibrilar.component';

describe('CrodesfibrilarComponent', () => {
  let component: CrodesfibrilarComponent;
  let fixture: ComponentFixture<CrodesfibrilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrodesfibrilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrodesfibrilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
