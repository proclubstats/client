import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProClubsMultipleSelectComponent } from './pro-clubs-multiple-select.component';

describe('ProClubsMultipleSelectComponent', () => {
  let component: ProClubsMultipleSelectComponent;
  let fixture: ComponentFixture<ProClubsMultipleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProClubsMultipleSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProClubsMultipleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
