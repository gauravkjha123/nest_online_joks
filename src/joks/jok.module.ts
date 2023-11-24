import { Module } from '@nestjs/common';
import { JokeService } from './jok.service';
import { JokeController } from './jok.controller';

@Module({
  imports: [],
  providers: [JokeService],
  exports: [],
  controllers: [JokeController],
})
export class JokeModule {}
