import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsSquadComponent } from './team-details-squad.component';

describe('TeamDetailsSquadComponent', () => {
  let component: TeamDetailsSquadComponent;
  let fixture: ComponentFixture<TeamDetailsSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamDetailsSquadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamDetailsSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
