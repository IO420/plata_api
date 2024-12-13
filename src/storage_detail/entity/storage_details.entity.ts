import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class storageDetailEntity{

    @PrimaryGeneratedColumn({type:"int"})
    id_storage_detail:number

    @Column({type:"varchar"})
    price:number

    @Column({type:"varchar"})
    id_storage:number

    @Column({type:"varchar"})
    id_product_supplier:number
}