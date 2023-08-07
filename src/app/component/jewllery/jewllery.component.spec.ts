import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewlleryComponent } from './jewllery.component';

describe('JewlleryComponent', () => {
  let component: JewlleryComponent;
  let fixture: ComponentFixture<JewlleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewlleryComponent]
    });
    fixture = TestBed.createComponent(JewlleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
