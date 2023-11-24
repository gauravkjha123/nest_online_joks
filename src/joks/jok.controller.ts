import { JokeService } from './jok.service';
import {
  Controller,
  Get
} from '@nestjs/common';

@Controller('')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('random-joke')
  async getRandomJoke(): Promise<{ joke: string }> {
    const joke = await this.jokeService.getRandomJoke();
    return { joke };
  }
}

