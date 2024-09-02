import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastGamesFormComponent } from './last-games-form.component';

describe('LastGamesFormComponent', () => {
  let component: LastGamesFormComponent;
  let fixture: ComponentFixture<LastGamesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastGamesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastGamesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
