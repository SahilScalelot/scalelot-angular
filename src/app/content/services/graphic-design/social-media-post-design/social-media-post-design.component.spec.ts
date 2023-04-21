import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPostDesignComponent } from './social-media-post-design.component';

describe('SocialMediaPostDesignComponent', () => {
  let component: SocialMediaPostDesignComponent;
  let fixture: ComponentFixture<SocialMediaPostDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaPostDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaPostDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
