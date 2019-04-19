import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlayersComponent } from './home-players.component';

describe('PlayersComponent', () => {
  let component: HomePlayersComponent;
  let fixture: ComponentFixture<HomePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlayersComponent ]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
