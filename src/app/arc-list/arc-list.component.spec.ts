import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcListComponent } from './arc-list.component';

describe('ArcListComponent', () => {
  let component: ArcListComponent;
  let fixture: ComponentFixture<ArcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
