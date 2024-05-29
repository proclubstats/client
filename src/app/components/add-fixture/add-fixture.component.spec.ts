import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFixtureComponent } from './add-fixture.component';

describe('AddPlayerComponent', () => {
  let component: AddFixtureComponent;
  let fixture: ComponentFixture<AddFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFixtureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
