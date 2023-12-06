import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpException,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/cats.dto';
import { Cat } from './interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  getAll(): CreateCatDto[] {
    return this.catsService.getAll();
  }
  @Get(':id')
  getCat(@Param('id') id: number): Cat | HttpException {
    return this.catsService.getCat(id);
  }
  @Post()
  create(@Body() createCatDto: CreateCatDto): Cat {
    return this.catsService.create(createCatDto);
  }
}
