import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JokeService {
  async getRandomJoke(): Promise<string> {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    return response.data.value;
  }
}
