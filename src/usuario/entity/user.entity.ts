import { PhysicalInventoryEntity } from 'src/inventario_fisico/entity/if.entity';
import { LogicalInventoryEntity } from 'src/inventario_logico/entity/il.entity';
import { RolEntity } from 'src/rol/entity/rol.entity';
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

  @OneToMany(()=> LogicalInventoryEntity,li=>li.id_user)
  li:LogicalInventoryEntity[];

  @OneToMany(()=> PhysicalInventoryEntity,pi=>pi.id_user)
  pi:LogicalInventoryEntity[];
}
