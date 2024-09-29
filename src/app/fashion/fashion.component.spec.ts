import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionComponent } from './fasion.component';

describe('FasionComponent', () => {
  let component: FashionComponent;
  let fixture: ComponentFixture<FashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
