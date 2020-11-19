import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import 'dotenv/config';
import { UserModule } from './user/user.module';
import { FriendModule } from './friend/friend.module';
import { User } from './user/user.entity';
import { Friend } from './friend/friend.entity';

const { DB_HOST, 
  DB_USERNAME, DB_NAME, 
  DB_PASSWORD } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: 3306,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [User, Friend],
      synchronize: true,
    }),
    UserModule,
    FriendModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
