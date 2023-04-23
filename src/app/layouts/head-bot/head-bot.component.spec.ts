import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBotComponent } from './head-bot.component';

describe('HeadBotComponent', () => {
  let component: HeadBotComponent;
  let fixture: ComponentFixture<HeadBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
