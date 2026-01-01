import { IsString, IsNotEmpty,IsEmail, IsNumber, IsEnum } from "class-validator"
export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'Name should not be empty' })
    name:string;

    @IsEmail({},{ message: 'Please provide valid email' })
    @IsNotEmpty()
    email:string;

    @IsNumber()
    @IsNotEmpty( {message: 'Number cannot be left empty' })
    contact:number;

    @IsEnum(['ADMIN', 'USER', 'CUSTOMER', 'AGENT', 'INFOSEEK'],{ message: 'Role must be one of the following: ADMIN, USER, CUSTOMER, AGENT, or INFOSEEK'})
    @IsNotEmpty()
    role: 'ADMIN' | 'USER' | 'CUSTOMER' | 'AGENT' | 'INFOSEEK';
}
