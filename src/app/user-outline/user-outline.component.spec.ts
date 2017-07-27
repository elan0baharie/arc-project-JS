import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutlineComponent } from './user-outline.component';

describe('UserOutlineComponent', () => {
  let component: UserOutlineComponent;
  let fixture: ComponentFixture<UserOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
