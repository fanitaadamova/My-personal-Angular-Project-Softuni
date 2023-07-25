import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesAllComponent } from './themes-all.component';

describe('ThemesAllComponent', () => {
  let component: ThemesAllComponent;
  let fixture: ComponentFixture<ThemesAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemesAllComponent]
    });
    fixture = TestBed.createComponent(ThemesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
