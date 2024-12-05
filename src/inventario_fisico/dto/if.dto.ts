import { IsDate, IsNotEmpty, IsNumber } from "class-validator";


export class InventarioFisicoDto{

    @IsNotEmpty()
    @IsNumber()
    id_user:number;

    @IsNotEmpty()
    @IsDate()
    update_date:Date;


}