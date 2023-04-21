import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbDatabaseDesignComponent } from './mongodb-database-design.component';

describe('MongodbDatabaseDesignComponent', () => {
  let component: MongodbDatabaseDesignComponent;
  let fixture: ComponentFixture<MongodbDatabaseDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongodbDatabaseDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongodbDatabaseDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
