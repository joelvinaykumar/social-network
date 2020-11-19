import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn({ name: 'id'})
  public id: number;

  @Column({ 
    name: 'first_name',
    unique: true
  })
  firstName: string;

  @Column({ name: 'last_name'})
  lastName?: string;

  @Column({ name: 'avatar'})
  avatar?: string;

}