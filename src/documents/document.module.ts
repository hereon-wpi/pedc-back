import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DocumentController } from "./document.controller";
import { DocumentService } from "./document.service";
import { RequirementDocument, RequirementDocumentSchema } from "./document.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: RequirementDocument.name,
      schema: RequirementDocumentSchema
    }])
  ],
  controllers: [DocumentController],
  providers: [DocumentService]
})
export class DocumentModule {
}
