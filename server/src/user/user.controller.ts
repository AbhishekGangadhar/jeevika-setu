import { Controller, Get, Post, Delete, Param, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(":id")
    getUserData(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post()
    createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }

}
