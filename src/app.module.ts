import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { TemplateModule } from "./templates/template.module";
import { DocumentModule } from "./documents/document.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pedc'),
    TemplateModule,
    DocumentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
