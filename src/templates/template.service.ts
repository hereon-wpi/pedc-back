import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Template, TemplateDocument } from "./template.schema";
import { CreateTemplateDto } from "./template.dto";

@Injectable()
export class TemplateService {
  constructor(@InjectModel(Template.name) private model: Model<TemplateDocument>) {
  }

  async create(dto: CreateTemplateDto): Promise<Template> {
    const createdTemplate = new this.model(dto);

    return createdTemplate.save();
  }

  async findAll(): Promise<Template[]> {
    return this.model.find().exec();
  }

  async removeOne(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
