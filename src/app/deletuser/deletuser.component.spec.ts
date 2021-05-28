import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletuserComponent } from './deletuser.component';

describe('DeletuserComponent', () => {
  let component: DeletuserComponent;
  let fixture: ComponentFixture<DeletuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
