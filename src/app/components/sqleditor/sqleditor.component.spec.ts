import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqleditorComponent } from './sqleditor.component';

describe('SqleditorComponent', () => {
  let component: SqleditorComponent;
  let fixture: ComponentFixture<SqleditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqleditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqleditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
