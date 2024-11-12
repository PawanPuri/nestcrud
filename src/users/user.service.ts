
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}

    //create user
    async create(createUserDto:CreateUserDto):Promise<User>{
        // const model=new this.userModel()
        // model.fname=createUserDto.fname
        // model.lname=createUserDto.lname
        // model.email=createUserDto.email
        // model.mobile=createUserDto.mobile
        // model.collegename=createUserDto.collegename
        // model.applyfor=createUserDto.applyfor

        return await this.userModel.create(createUserDto)
    }

    async getusers(){
        return await this.userModel.find().exec()
    }
//update userby id
    async updateUser(id:string,updateUserDto:UpdateUserDto){
        return await this.userModel.updateOne({_id:id},
            {
                fname:updateUserDto.fname,
                lname:updateUserDto.lname,
                email:updateUserDto.email,
                mobile:updateUserDto.mobile,
                collegename:updateUserDto.collegename,
                applyfor:updateUserDto.applyfor
                
            }

        )
    }
// delete user by id
    async deleteUser(id:string){
        return await this.userModel.deleteOne({_id:id})
    }

    //get user by id

    async userbyid(id:string){
        return await this.userModel.findById(id).exec()
    }
  
}
