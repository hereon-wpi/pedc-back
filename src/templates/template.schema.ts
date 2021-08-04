import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TemplateType = Template & Document;

@Schema({ timestamps: true })
export class Template {
  @Prop()
  title: string;

  @Prop()
  blocks: Array<any>;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
