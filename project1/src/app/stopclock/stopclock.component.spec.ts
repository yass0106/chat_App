import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopclockComponent } from './stopclock.component';

describe('StopclockComponent', () => {
  let component: StopclockComponent;
  let fixture: ComponentFixture<StopclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StopclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StopclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
