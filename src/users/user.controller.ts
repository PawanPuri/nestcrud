
import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { AuthGuard } from './guard/custom-guard';
import { HttpExceptionFilter } from './custom-exception/exception-fillter';

@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService:UserService){}
  @Post()
  async createUser(@Body() createUserDto:CreateUserDto){
    return await this.userService.create(createUserDto)
  }

  @UseGuards(new AuthGuard)
  @Get()
  async getallUser(){
    return await this.userService.getusers()
  }

  @Put(':id')
  async update(@Param('id') id:string,  @Body() updateUserDto:UpdateUserDto){
    return await this.userService.updateUser(id,updateUserDto)
  }

  @Delete(':id')
  async deleteoneuser(@Param('id') id:string){
    return this.userService.deleteUser(id)
  }
}
