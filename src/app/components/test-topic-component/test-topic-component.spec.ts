import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopicComponent } from './test-topic-component';

describe('TestTopicComponent', () => {
  let component: TestTopicComponent;
  let fixture: ComponentFixture<TestTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTopicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
