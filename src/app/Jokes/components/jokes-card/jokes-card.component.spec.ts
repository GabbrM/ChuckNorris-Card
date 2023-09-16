import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesCardComponent } from './jokes-card.component';

describe('JokesCardComponent', () => {
  let component: JokesCardComponent;
  let fixture: ComponentFixture<JokesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokesCardComponent]
    });
    fixture = TestBed.createComponent(JokesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
