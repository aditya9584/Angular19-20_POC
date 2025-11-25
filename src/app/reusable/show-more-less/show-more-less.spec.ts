import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreLess } from './show-more-less';

describe('ShowMoreLess', () => {
  let component: ShowMoreLess;
  let fixture: ComponentFixture<ShowMoreLess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMoreLess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMoreLess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
