import { UsersService } from './users.service';
import {
  Controller,
} from '@nestjs/common';

@Controller('user-details')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

}

