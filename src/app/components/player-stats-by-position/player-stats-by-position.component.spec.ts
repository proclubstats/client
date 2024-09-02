import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatsByPositionComponent } from './player-stats-by-position.component';

describe('PlayerStatsByPositionComponent', () => {
  let component: PlayerStatsByPositionComponent;
  let fixture: ComponentFixture<PlayerStatsByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerStatsByPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerStatsByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
