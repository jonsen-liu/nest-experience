import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/cats.dto';
import { Cat } from './interfaces/cat.interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  getAll(): Cat[] {
    return this.cats;
  }
  create(cat: CreateCatDto) {
    console.log(cat);
    const randomId = Math.floor(Math.random() * 100) + 1;
    this.cats.push({
      id: randomId,
      ...cat,
    });
    return {
      id: randomId,
      ...cat,
    };
  }
  getCat(id: number): Cat | HttpException {
    const cat = this.cats.find((cat) => cat.id === id);
    if (cat) {
      return cat;
    }
    return new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    // return {
    //   id: id,
    //   name: 'Tom',
    //   age: 1,
    //   breed: 'test',
    // };
  }
}
