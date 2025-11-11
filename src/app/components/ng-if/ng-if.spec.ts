import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIF } from './ng-if';

describe('NgIF', () => {
  let component: NgIF;
  let fixture: ComponentFixture<NgIF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
