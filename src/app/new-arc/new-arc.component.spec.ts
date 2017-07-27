import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArcComponent } from './new-arc.component';

describe('NewArcComponent', () => {
  let component: NewArcComponent;
  let fixture: ComponentFixture<NewArcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
