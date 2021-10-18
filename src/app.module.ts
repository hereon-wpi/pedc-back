import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { TemplateModule } from "./templates/template.module";
import { DocumentModule } from "./documents/document.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./users/user.module";
import { AppController } from "./app.controller";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'pedc-view', 'build'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/pedc'),
    TemplateModule,
    DocumentModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
