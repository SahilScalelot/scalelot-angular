import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagentoDevelopmentComponent } from './magento-development.component';

describe('MagentoDevelopmentComponent', () => {
  let component: MagentoDevelopmentComponent;
  let fixture: ComponentFixture<MagentoDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagentoDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagentoDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
