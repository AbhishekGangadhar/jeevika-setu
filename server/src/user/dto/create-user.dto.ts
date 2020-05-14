import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsEmail({}, { message: "invalid email" })
    readonly email: string;

    @MaxLength(15, { message: "user name can't be more than 15 characters" })
    @MinLength(3, { message: "user name can't be less than 3 characters" })
    @IsString()
    readonly name: string;
}
