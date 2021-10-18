import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { USER_ROLE } from "./user.dto";

export type UserSchemaType = UserSchemaDefinition & Document;

@Schema({
  timestamps: true,
  collection: 'users'
})
export class UserSchemaDefinition {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  role: USER_ROLE;

  @Prop()
  docs: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserSchemaDefinition);
