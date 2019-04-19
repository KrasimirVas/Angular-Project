import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerReviewComponent } from './player-review.component'; 

describe('PlayerReviewComponent', () => {
  let component: PlayerReviewComponent;
  let fixture: ComponentFixture<PlayerReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
