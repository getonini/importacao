import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeCreditosComponent } from './filme-creditos.component';

describe('FilmeCreditosComponent', () => {
  let component: FilmeCreditosComponent;
  let fixture: ComponentFixture<FilmeCreditosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeCreditosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
