import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

import { Module } from "@nestjs/common";
import { User, UserSchema } from "./schema/user";
@Module({
    imports:[MongooseModule.forFeature([{name:User.name , schema:UserSchema}])],
    controllers:[UserController],
    providers:[UserService]
})

export class UserModule{}

