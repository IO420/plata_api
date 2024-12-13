import { RolEntity } from 'src/rol/entity/rol.entity';
import { storageEntity } from 'src/storage/entity/storage.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntiy {
  @PrimaryGeneratedColumn({ name: 'id_usuario', type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  email: string;

  @ManyToOne(() => RolEntity, (rol) => rol.users)
  id_rol: RolEntity;

  @OneToMany(() => storageEntity, (storage) => storage.id_user)
  storage: storageEntity[];
}
