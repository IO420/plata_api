import { UserEntiy } from "src/usuario/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PhysicalInventoryEntity{

    @PrimaryGeneratedColumn({name:"id_physical_inventory",type:"int"})
    id:number;

    @Column({type:"datetime"})
    update_date:Date

    @ManyToOne(()=>UserEntiy,user=>user.pi)
    id_user:UserEntiy;
}