import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterResultComponent } from './enter-result.component';

describe('AddGameComponent', () => {
  let component: EnterResultComponent;
  let fixture: ComponentFixture<EnterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
