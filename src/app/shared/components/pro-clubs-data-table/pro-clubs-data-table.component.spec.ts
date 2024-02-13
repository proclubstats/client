import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProClubsDataTableComponent } from './pro-clubs-data-table.component';

describe('ProClubsDataTableComponent', () => {
  let component: ProClubsDataTableComponent;
  let fixture: ComponentFixture<ProClubsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProClubsDataTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProClubsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
