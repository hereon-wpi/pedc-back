import { Module } from '@nestjs/common';
import { DocumentController } from "./documents/document.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TemplateModule } from "./templates/template.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pedc'),
    TemplateModule,
  ],
  controllers: [
    DocumentController,
  ],
  providers: [],
})
export class AppModule {}
