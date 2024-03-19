import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFixtureComponent } from './modify-fixture.component';

describe('ModifyFixtureComponent', () => {
  let component: ModifyFixtureComponent;
  let fixture: ComponentFixture<ModifyFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyFixtureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
