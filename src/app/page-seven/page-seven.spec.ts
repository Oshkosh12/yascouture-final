import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSeven } from './page-seven';

describe('PageSeven', () => {
  let component: PageSeven;
  let fixture: ComponentFixture<PageSeven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSeven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSeven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
