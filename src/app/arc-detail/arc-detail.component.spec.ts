import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcDetailComponent } from './arc-detail.component';

describe('ArcDetailComponent', () => {
  let component: ArcDetailComponent;
  let fixture: ComponentFixture<ArcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
