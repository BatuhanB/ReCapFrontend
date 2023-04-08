import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from './../../services/car-image.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css'],
})
export class CarImageAddComponent implements OnInit {
  carImageAddForm: FormGroup;
  selectedCar:number;
  cars:Car[] = [];

  constructor(
    private carImageService: CarImageService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService:CarService
  ) {}

  ngOnInit(): void {
    this.createAddForm();
    this.getCars();
  }

  createAddForm() {
    this.carImageAddForm = this.formBuilder.group({
      carId: ['', Validators.required],
      imagePath: ['', Validators.required],
    });
  }

  add() {
    if (this.carImageAddForm.valid) {
      let carImageModel = Object.assign({}, this.carImageAddForm.value);
      this.carImageService.AddCarImages(carImageModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    }else{
      this.toastrService.error("Formunuz Eksik","Dikkat!");
    }
  }

  onSelectedCar(val: any) {
    this.selectedCar = val;
    console.log(this.selectedCar);
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
    });
  }

}
