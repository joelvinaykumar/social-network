import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { Friend } from './friend.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Friend, User])
  ],
  providers: [FriendService],
  controllers: [FriendController],
  exports: [TypeOrmModule]
})
export class FriendModule {}
