import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoItemComponent } from './edicao-item.component';

describe('EdicaoItemComponent', () => {
  let component: EdicaoItemComponent;
  let fixture: ComponentFixture<EdicaoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
