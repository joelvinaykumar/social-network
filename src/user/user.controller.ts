import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserDto } from './user.dto';


@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  createUser(@Body(new ValidationPipe()) body: UserDto) {
    return this.userService.createUser(body);
  }

  @Get()
  getAllUsers(@Query('page') page: number, @Query('limit') limit: number) {
    return this.userService.getAllUsers(page, limit);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

}