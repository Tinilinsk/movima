import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedPage } from './watched-page';

describe('WatchedPage', () => {
  let component: WatchedPage;
  let fixture: ComponentFixture<WatchedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchedPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchedPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
