import { UserEntiy } from "src/usuario/entity/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class LogicalInventoryEntity{

    @PrimaryGeneratedColumn({name:"id_logical_inventory",type:"int"})
    id:number

    @Column({type:"datetime"})
    update_date:Date

    @ManyToOne(()=>UserEntiy,user=>user.li)
    id_user:UserEntiy;
}