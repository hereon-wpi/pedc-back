import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateDocumentDTO, UpdateDocumentDTO } from "./document.dto";
import { RequirementDocument, RequirementDocumentType } from "./document.schema";

@Injectable()
export class DocumentService {
  constructor(
    @InjectModel(RequirementDocument.name) private model: Model<RequirementDocumentType>
  ) {
  }

  async create(dto: CreateDocumentDTO): Promise<RequirementDocument> {
    const createdTemplate = new this.model(dto);

    return createdTemplate.save();
  }

  async findAll(): Promise<RequirementDocument[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<RequirementDocument> {
    return this.model.findOne({ _id: id }).exec();
  }

  async updateOne(id: string, dto: UpdateDocumentDTO): Promise<any> {
    return this.model.findOneAndUpdate({ _id: id }, dto);
  }

  async removeOne(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
