import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEight } from './page-eight';

describe('PageEight', () => {
  let component: PageEight;
  let fixture: ComponentFixture<PageEight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
