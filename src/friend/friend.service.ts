import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Friend } from './friend.entity';
import { FriendDto } from './friend.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend) private friendModel: Repository<Friend>,
    @InjectRepository(User) private userModel: Repository<User>,
  ) {}

  async createFriend(body: FriendDto) {
    try {
      const userIds = Object.values(body);
      const users = await this.userModel.findByIds(userIds);
      if (users.length >= 2) {
        const friend = this.friendModel.create(body);
        await this.friendModel.save(friend);
        return friend;
      } else {
        throw new HttpException('Either or both of users are not found', 400);
      }
    } catch (e) {
      throw new HttpException(e, 400);
    }
  }

  async getAllFriends(page, limit) {
    try {
      const [result, total_records] = await this.friendModel.findAndCount({
        take: limit || 10,
        skip: page || 0,
      });
      return { data: result, total_records };
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  async getFriendsById(id: number) {
    try {
      const friends = await this.friendModel.find({
        where: { primaryUserId: id },
      });
      const friendIds = friends.map((friend) => friend.secondaryUserId);
      return await this.userModel.findByIds(friendIds);
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  async getFriendofFriends(id: number) {
    try {
      const friends = await this.friendModel.find({
        where: { primaryUserId: id },
      });
      const friendIds = friends.map(friend => friend.secondaryUserId);
      const indirectFriends = [];
      if (friendIds.length > 0) {
        for (let friendId of friendIds) {
          indirectFriends.push(...await this.getFriendsById(friendId));
        }
        return indirectFriends.filter(friend => friend.id!=id);
      }
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }
}
