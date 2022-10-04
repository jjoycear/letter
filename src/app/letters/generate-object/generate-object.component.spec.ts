import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateObjectComponent } from './generate-object.component';

describe('GenerateObjectComponent', () => {
  let component: GenerateObjectComponent;
  let fixture: ComponentFixture<GenerateObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
