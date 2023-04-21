import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlDatabaseDesignComponent } from './mysql-database-design.component';

describe('MysqlDatabaseDesignComponent', () => {
  let component: MysqlDatabaseDesignComponent;
  let fixture: ComponentFixture<MysqlDatabaseDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlDatabaseDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysqlDatabaseDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
