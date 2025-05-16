import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierdetailComponent } from './quartierdetail.component';

describe('QuartierdetailComponent', () => {
  let component: QuartierdetailComponent;
  let fixture: ComponentFixture<QuartierdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartierdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
