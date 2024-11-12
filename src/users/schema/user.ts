import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument= User & Document;

@Schema()
export class User{
    @Prop({required:true})
    fname:string;

    @Prop({required:true})
    lname:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    mobile:number;

    @Prop({required:true})
    collegename:string;

    @Prop({required:true})
    applyfor:string;


}

export const UserSchema=SchemaFactory.createForClass(User)