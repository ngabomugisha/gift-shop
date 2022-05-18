import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekOutComponent } from './check-out.component';

describe('ChekOutComponent', () => {
  let component: ChekOutComponent;
  let fixture: ComponentFixture<ChekOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChekOutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
