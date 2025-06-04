import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFive } from './page-five';

describe('PageFive', () => {
  let component: PageFive;
  let fixture: ComponentFixture<PageFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
