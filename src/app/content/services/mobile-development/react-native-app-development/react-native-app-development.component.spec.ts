import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNativeAppDevelopmentComponent } from './react-native-app-development.component';

describe('ReactNativeAppDevelopmentComponent', () => {
  let component: ReactNativeAppDevelopmentComponent;
  let fixture: ComponentFixture<ReactNativeAppDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactNativeAppDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactNativeAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
