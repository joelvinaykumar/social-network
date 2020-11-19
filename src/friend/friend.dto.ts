import { IsNumber } from 'class-validator';

export class FriendDto {

  @IsNumber()
  primaryUserId: number;

  @IsNumber()
  secondaryUserId: number;

}
