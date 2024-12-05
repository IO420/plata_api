import { UserEntiy } from 'src/usuario/entity/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RolEntity {
  @PrimaryGeneratedColumn({ name: 'id_rol', type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => UserEntiy, (user) => user.id_rol)
  users: UserEntiy[];
}
