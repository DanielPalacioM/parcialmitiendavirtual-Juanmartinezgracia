import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductdetailPage } from './productdetails.page';

describe('ProductdetailPage', () => {
  let component: ProductdetailPage;
  let fixture: ComponentFixture<ProductdetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
