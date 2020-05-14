import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from "./user.entity";
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule { }
