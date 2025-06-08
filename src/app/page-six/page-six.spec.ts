import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSix } from './page-six';

describe('PageSix', () => {
  let component: PageSix;
  let fixture: ComponentFixture<PageSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
