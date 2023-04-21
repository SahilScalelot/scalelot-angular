import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosAppDevelopmentComponent } from './ios-app-development.component';

describe('IosAppDevelopmentComponent', () => {
  let component: IosAppDevelopmentComponent;
  let fixture: ComponentFixture<IosAppDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosAppDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IosAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
