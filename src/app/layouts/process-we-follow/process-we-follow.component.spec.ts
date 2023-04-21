import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessWeFollowComponent } from './process-we-follow.component';

describe('ProcessWeFollowComponent', () => {
  let component: ProcessWeFollowComponent;
  let fixture: ComponentFixture<ProcessWeFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessWeFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessWeFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
