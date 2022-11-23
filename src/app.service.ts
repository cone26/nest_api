import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //movies: string[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getMovies(): string {
    return 'This will return movie list';
  }

  getOneMovie(id): string {
    return `This will return a movie with id : ${id}`;
  }

  remove(id): string {
    return `This will delete a movie with id : ${id}`;
  }

  update(id): string {
    return `This will update a movie data with id : ${id}`;
  }

  create(): string {
    return 'This will create a movie data in the list';
  }
}
