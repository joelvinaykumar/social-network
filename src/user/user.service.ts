import {
  HttpException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userModel: Repository<User>,
  ) {}

  async createUser(body: UserDto): Promise<User> {
    try {
      const user = this.userModel.create(body);
      await this.userModel.save(user);
      return user;
    }catch(e) {
      throw new HttpException(e, 500);
    }
  }

  async getAllUsers(page, limit) {
    try {
      const [result, total_records] = await this.userModel.findAndCount({
        take: limit || 10,
        skip: page || 0
      });
      return { data: result, total_records };
    }catch(e) {
      throw new HttpException(e, 500);
    }
  }

  async getUserById(id) {
    try {
      return await this.userModel.findOneOrFail({ where: {id}});
    }catch(e) {
      throw new NotFoundException('User not found');
    }
  }

}