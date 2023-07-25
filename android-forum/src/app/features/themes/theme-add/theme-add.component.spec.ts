import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeAddComponent } from './theme-add.component';

describe('ThemeAddComponent', () => {
  let component: ThemeAddComponent;
  let fixture: ComponentFixture<ThemeAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeAddComponent]
    });
    fixture = TestBed.createComponent(ThemeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
