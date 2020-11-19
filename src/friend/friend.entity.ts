import { 
  Entity, 
  Column,
  Unique,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('friend')
@Unique("UQ_NAMES", ["primaryUserId", "secondaryUserId"])
export class Friend {

  @PrimaryGeneratedColumn({ name: 'id'})
  public id: number;

  @Column({ name: 'primary_user' })
  primaryUserId: number;

  @Column({ name: 'secondary_user'})
  secondaryUserId: number;

}