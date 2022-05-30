import { CarImage } from './carImage';
export interface CarDetail {
  carId: number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  description: string;
  modelYear: string;
  carImages: CarImage[];
}
