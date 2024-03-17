import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsOverallComponent } from './team-details-overall.component';

describe('TeamDetailsOverallComponent', () => {
  let component: TeamDetailsOverallComponent;
  let fixture: ComponentFixture<TeamDetailsOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamDetailsOverallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamDetailsOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
