import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewreviewComponent } from './adminviewreview.component';

describe('AdminviewreviewComponent', () => {
  let component: AdminviewreviewComponent;
  let fixture: ComponentFixture<AdminviewreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
