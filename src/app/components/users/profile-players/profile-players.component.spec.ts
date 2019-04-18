import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePlayersComponent } from './profile-players.component';

describe('ProfilePlayersComponent', () => {
  let component: ProfilePlayersComponent;
  let fixture: ComponentFixture<ProfilePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
