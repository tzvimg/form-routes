import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormAComponent } from './sub-form-a.component';

describe('SubFormAComponent', () => {
  let component: SubFormAComponent;
  let fixture: ComponentFixture<SubFormAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubFormAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
