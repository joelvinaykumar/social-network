import { IsString, IsOptional } from 'class-validator';

export class UserDto {

  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;


  @IsOptional()
  @IsString()
  avatar?: string;

}
