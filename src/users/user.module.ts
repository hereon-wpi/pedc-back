import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, UserSchemaDefinition } from "./user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: UserSchemaDefinition.name,
      schema: UserSchema
    }])
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
