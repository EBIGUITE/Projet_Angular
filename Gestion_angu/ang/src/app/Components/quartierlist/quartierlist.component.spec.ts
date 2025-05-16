import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierlistComponent } from './quartierlist.component';

describe('QuartierlistComponent', () => {
  let component: QuartierlistComponent;
  let fixture: ComponentFixture<QuartierlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartierlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
