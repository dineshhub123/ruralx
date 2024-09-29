import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellNotificationComponent } from './sell-notification.component';

describe('SellNotificationComponent', () => {
  let component: SellNotificationComponent;
  let fixture: ComponentFixture<SellNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
