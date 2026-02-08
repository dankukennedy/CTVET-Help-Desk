import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty,IsEmail, IsNumber, IsEnum } from "class-validator"
export class CreateUserDto {
    @ApiProperty({ required: false, example: 'John Doe' })
    @IsString()
    @IsNotEmpty({ message: 'Name should not be empty' })
    name:string;

    @ApiProperty({ required: false, example: 'John Doe' })
    @IsString()
    @IsNotEmpty({ message: 'Name should not be empty' })
    username:string;
    
    @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
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
