import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesLimitComponent } from './themes-limit.component';

describe('ThemesLimitComponent', () => {
  let component: ThemesLimitComponent;
  let fixture: ComponentFixture<ThemesLimitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemesLimitComponent]
    });
    fixture = TestBed.createComponent(ThemesLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
