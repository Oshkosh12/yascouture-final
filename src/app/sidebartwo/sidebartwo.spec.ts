import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebartwo } from './sidebartwo';

describe('Sidebartwo', () => {
  let component: Sidebartwo;
  let fixture: ComponentFixture<Sidebartwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebartwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebartwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
