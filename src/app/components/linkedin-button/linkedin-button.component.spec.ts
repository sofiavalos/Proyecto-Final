import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinButtonComponent } from './linkedin-button.component';

describe('LinkedinButtonComponent', () => {
  let component: LinkedinButtonComponent;
  let fixture: ComponentFixture<LinkedinButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
