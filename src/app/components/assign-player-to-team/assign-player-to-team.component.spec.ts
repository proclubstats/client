import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPlayerToTeamComponent } from './assign-player-to-team.component';

describe('AssignPlayerToTeamComponent', () => {
  let component: AssignPlayerToTeamComponent;
  let fixture: ComponentFixture<AssignPlayerToTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignPlayerToTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignPlayerToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
