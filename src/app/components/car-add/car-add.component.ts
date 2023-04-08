import { ColorService } from './../../services/color.service';
import { BrandService } from './../../services/brand.service';
import { Color } from './../../models/color';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: UntypedFormGroup;
  brands: Brand[] = [];
  colors: Color[] = [];

  selectedBrand: number ;
  selectedColor: number ;
  
  constructor(
    private carService: CarService,
    private toastrService: ToastrService,
    private formBuilder: UntypedFormBuilder,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColors();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      carName: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);

      var brandId: number = this.selectedBrand;
      var colorId: number = this.selectedColor;

      carModel.brandId = brandId;
      carModel.colorId = colorId;

      this.carService.addCars(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı!');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası!'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz Eksik', 'Dikkat!');
    }
  }

  onSelectedBrand(val: any) {
    this.selectedBrand = val;
    console.log(this.selectedBrand);
  }
  onSelectedColor(val: any) {
    this.selectedColor = val;
    console.log(this.selectedColor);
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
