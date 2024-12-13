import { UserEntiy } from "src/usuario/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class storageEntity{
    @PrimaryGeneratedColumn({type:"int"})
    id_storage:number;

    @Column({type:"varchar"})
    type:string;

    @Column({type:"datetime"})
    date_update:Date

    @ManyToOne(()=>UserEntiy,(user)=> user.storage,{nullable:false})
    id_user:UserEntiy
}