import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemSheet } from './add-item-sheet';

describe('AddItemSheet', () => {
  let component: AddItemSheet;
  let fixture: ComponentFixture<AddItemSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(AddItemSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
