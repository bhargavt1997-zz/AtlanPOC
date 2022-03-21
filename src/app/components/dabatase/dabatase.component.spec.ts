import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabataseComponent } from './dabatase.component';

describe('DabataseComponent', () => {
  let component: DabataseComponent;
  let fixture: ComponentFixture<DabataseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DabataseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DabataseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
