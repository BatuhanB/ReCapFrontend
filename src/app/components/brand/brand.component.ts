import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand?: Brand;
  dataLoaded: boolean = false;
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    return this.currentBrand == brand
      ? 'list-group-item active'
      : 'list-group-item';
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  // getAllBrandClass() {// return back to fix active
  //   return this.currentBrand == {id:-1, name:''}
  //     ? 'list-group-item active'
  //     : 'list-group-item';
  // }
  getAllBrandClass() {
    // return back to fix active
    return this.currentBrand == { id: -1, name: '' }
      ? 'list-group-item active'
      : 'list-group-item';
  }
  reset() {
    this.currentBrand = { id: -1, name: '' };
  }
}
