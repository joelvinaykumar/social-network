import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FriendService } from './friend.service';
import { FriendDto } from './friend.dto';


@Controller('friend')
@ApiTags('Friend')
export class FriendController {
  constructor(
    private readonly friendService: FriendService
  ) { }

  @Post()
  createFriend(@Body(new ValidationPipe()) body: FriendDto) {
    return this.friendService.createFriend(body);
  }

  @Get()
  getAllFriends(@Query('page') page: number, @Query('limit') limit: number) {
    return this.friendService.getAllFriends(page, limit);
  }

  @Get(':id')
  getFriendsById(@Param('id') id: number) {
    return this.friendService.getFriendsById(id);
  }

  @Get('passive/:id')
  getFriendofFriends(@Param('id') id: number) {
    return this.friendService.getFriendofFriends(id);
  }

}