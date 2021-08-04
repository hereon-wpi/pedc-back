import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TemplateController } from "./template.controller";
import { Template, TemplateSchema } from "./template.schema";
import { TemplateService } from "./template.service";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Template.name,
      schema: TemplateSchema
    }])
  ],
  controllers: [TemplateController],
  providers: [TemplateService]
})
export class TemplateModule {
}
