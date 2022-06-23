import { CarImage } from './carImage';
export interface CarDetail {
  carId: number;
  carName: string;
  brandId:number;
  brandName: string;
  colorId:number;
  colorName: string;
  dailyPrice: number;
  description: string;
  modelYear: string;
  carImages: CarImage[];
}
