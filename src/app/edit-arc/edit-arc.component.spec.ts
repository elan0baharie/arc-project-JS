import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArcComponent } from './edit-arc.component';

describe('EditArcComponent', () => {
  let component: EditArcComponent;
  let fixture: ComponentFixture<EditArcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
