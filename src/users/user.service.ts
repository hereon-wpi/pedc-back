import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserSchemaDefinition, UserSchemaType } from "./user.schema";
import { USER_ROLE } from "./user.dto";


@Injectable()
export class UserService {

  constructor(
    @InjectModel(UserSchemaDefinition.name) private userModel: Model<UserSchemaType>
  ) {
  }

  async findOne(id: string): Promise<UserSchemaDefinition> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async findOneByName(username: string): Promise<UserSchemaDefinition> {
    return this.userModel.findOne({ username }).exec();
  }

  async updateRole(id: string, role: USER_ROLE): Promise<any> {
    return this.userModel.findOneAndUpdate({ _id: id }, { role });
  }

  async updateDocs(id: string, docId: string): Promise<any> {
    return this.userModel.findOneAndUpdate({ _id: id }, {
      $addToSet: { docs: [docId] }
    });
  }
}
