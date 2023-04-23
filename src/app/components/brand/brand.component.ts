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
  currentBrand?: Brand = null as any;
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
    this.brandService.getBrands().subscribe({
      next:(value)=> {
          this.brands = value.data;
          this.dataLoaded = true
      },error:(err) =>{
          console.log(err);
          
      },
    });
  }

  getAllBrandClass() {
    return this.currentBrand == null
      ? 'list-group-item active'
      : 'list-group-item ';
  }
  reset() {
    this.currentBrand = null as any;
  }
}
