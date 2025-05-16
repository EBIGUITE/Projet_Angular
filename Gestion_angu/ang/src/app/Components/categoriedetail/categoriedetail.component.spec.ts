import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriedetailComponent } from './categoriedetail.component';

describe('CategoriedetailComponent', () => {
  let component: CategoriedetailComponent;
  let fixture: ComponentFixture<CategoriedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
