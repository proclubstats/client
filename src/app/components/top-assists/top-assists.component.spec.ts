import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAssistsComponent } from './top-assists.component';

describe('TopAssistsComponent', () => {
  let component: TopAssistsComponent;
  let fixture: ComponentFixture<TopAssistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAssistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopAssistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
