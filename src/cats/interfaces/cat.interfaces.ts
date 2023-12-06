// import { IsNumberString, IsString, IsNumber } from 'class-validator';

export interface Cat {
  // @IsNumberString()
  id: number | string;

  // @IsString()
  name: string;

  // @IsNumber()
  age: number;
  breed: string;
}
