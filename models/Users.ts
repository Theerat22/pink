import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    idnumber: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    nickname: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
