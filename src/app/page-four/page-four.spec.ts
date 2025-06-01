import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFour } from './page-four';

describe('PageFour', () => {
  let component: PageFour;
  let fixture: ComponentFixture<PageFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
