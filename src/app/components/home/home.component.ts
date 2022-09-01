import { CarImageService } from './../../services/car-image.service';
import { CarDetail } from './../../models/carDetail';
import { CarImage } from './../../models/carImage';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carDetail: CarDetail[] = [];
  carImages: CarImage[];
  carImagePaths = "";
  carImagePath: string = 'https://localhost:5001';
  customOptions: OwlOptions = {
    items:4,
    center:true,
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    navText:['',''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  constructor(private carService:CarService, private carImageService:CarImageService) { }

  ngOnInit(): void {
    // return this.GetCarImages();
    return this.GetImages();
  }

  // GetCarImages(){
  //   this.carService.getCarDetail().subscribe((response)=>{
  //     this.carDetail = response.data;
  //     this.carImages = this.carDetail[0].carImages;
  //     this.carImagePaths = this.carDetail[0].carImages[0]?.imagePath;
  //     console.log(this.carDetail)
  //     console.log(this.carImagePaths)
  //     console.log(this.carImages)
  //   })
  // }
  GetImages(){
    this.carImageService.GetAllImages().subscribe((response)=>{
      this.carImages = response.data;
      let array = response.data.filter(x=>x.carImageId == x.carImageId).map(x=>x.carImageId > 1).reduce(x=>x.valueOf());
      //console.log(this.carImages)
    })
  }
  GetImagesForOne(){
    this.carImageService.GetAllImages().subscribe((response)=>{
      this.carImages = response.data;
      let array = response.data.filter(x=>x.carImageId).length;
      //console.log(this.carImages)
    })
  }

}
