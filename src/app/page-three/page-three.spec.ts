import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThree } from './page-three';

describe('PageThree', () => {
  let component: PageThree;
  let fixture: ComponentFixture<PageThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
