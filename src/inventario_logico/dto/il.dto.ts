import { IsDate, IsNotEmpty, IsNumber } from "class-validator";


export class inventarioLogicoDto{

    @IsNotEmpty()
    @IsNumber()
    id_usuario:string

    @IsNotEmpty()
    @IsDate()
    update_date:Date
}