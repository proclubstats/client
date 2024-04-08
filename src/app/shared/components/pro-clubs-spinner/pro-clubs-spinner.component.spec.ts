import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProClubsAutoCompleteSelectComponent } from './pro-clubs-auto-complete-select.component';

describe('ProClubsAutoCompleteSelectComponent', () => {
  let component: ProClubsAutoCompleteSelectComponent;
  let fixture: ComponentFixture<ProClubsAutoCompleteSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProClubsAutoCompleteSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProClubsAutoCompleteSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
