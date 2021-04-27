import { Car } from "./car";

export interface CarWithDetails extends Car{
  brandName: string;
  colorName: string;
  categoryName: string;
}