import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineuserComponent } from './offlineuser.component';

describe('OfflineuserComponent', () => {
  let component: OfflineuserComponent;
  let fixture: ComponentFixture<OfflineuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
