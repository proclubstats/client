import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsHistoryComponent } from './team-details-history.component';

describe('TeamDetailsHistoryComponent', () => {
  let component: TeamDetailsHistoryComponent;
  let fixture: ComponentFixture<TeamDetailsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamDetailsHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamDetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
