import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddreviewComponent } from './useraddreview.component';

describe('UseraddreviewComponent', () => {
  let component: UseraddreviewComponent;
  let fixture: ComponentFixture<UseraddreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
