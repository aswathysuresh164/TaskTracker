import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtasksComponent } from './viewtasks.component';

describe('ViewtasksComponent', () => {
  let component: ViewtasksComponent;
  let fixture: ComponentFixture<ViewtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
