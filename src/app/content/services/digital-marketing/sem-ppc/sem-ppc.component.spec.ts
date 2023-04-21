import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemPpcComponent } from './sem-ppc.component';

describe('SemPpcComponent', () => {
  let component: SemPpcComponent;
  let fixture: ComponentFixture<SemPpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemPpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemPpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
