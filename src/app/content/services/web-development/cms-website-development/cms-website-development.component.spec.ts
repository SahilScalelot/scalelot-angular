import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsWebsiteDevelopmentComponent } from './cms-website-development.component';

describe('CmsWebsiteDevelopmentComponent', () => {
  let component: CmsWebsiteDevelopmentComponent;
  let fixture: ComponentFixture<CmsWebsiteDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsWebsiteDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsWebsiteDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
