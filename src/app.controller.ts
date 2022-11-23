import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // get all the movies in the movie list
  @Get()
  getAllMovies(): string {
    return this.appService.getMovies();
  }

  // get a movie in the movie list with the id
  @Get(':id')
  getMovieById(@Param('id') id: string): string {
    return this.appService.getOneMovie(id);
  }

  // remove a movie in the movie list with the id
  @Delete(':id')
  deleteMovie(@Param('id') id: string): string {
    return this.appService.remove(id);
  }

  // update a movie data in the movie list with the id
  @Patch(':id')
  updateMovie(@Param('id') id: string): string {
    return this.appService.update(id);
  }

  // save a movie data in the movie list with the id
  // should add a @Body decorator for get informations about movie
  // + should add dto to add ⬆️
  @Post()
  createMovie(): string {
    return this.appService.create();
  }
  //movie 폴더를 따로 만들어야할듯
}
