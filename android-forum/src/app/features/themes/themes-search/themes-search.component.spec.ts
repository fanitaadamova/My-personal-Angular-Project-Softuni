import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesSearchComponent } from './themes-search.component';

describe('ThemesSearchComponent', () => {
  let component: ThemesSearchComponent;
  let fixture: ComponentFixture<ThemesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemesSearchComponent]
    });
    fixture = TestBed.createComponent(ThemesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
