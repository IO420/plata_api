import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

class UserDto{

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsNumber()
    id_rol:number;

}