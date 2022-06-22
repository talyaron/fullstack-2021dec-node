export interface user{
    userName: string,
    email: string,
    // uid: string,
    password: string
};

export interface tasks{
    title: string,
    // uid: string,
    description: string,
    date: Date,
}

import { Schema,model } from "mongoose"

const UserSchema = new Schema({
    userName: String,
    password: String,
    email: String
})

const User= model("user", UserSchema)

export default User