import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsDevelopmentComponent } from './nodejs-development.component';

describe('NodejsDevelopmentComponent', () => {
  let component: NodejsDevelopmentComponent;
  let fixture: ComponentFixture<NodejsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodejsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
