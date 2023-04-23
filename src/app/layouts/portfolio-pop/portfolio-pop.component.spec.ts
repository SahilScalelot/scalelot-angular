import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPopComponent } from './portfolio-pop.component';

describe('PortfolioPopComponent', () => {
  let component: PortfolioPopComponent;
  let fixture: ComponentFixture<PortfolioPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
