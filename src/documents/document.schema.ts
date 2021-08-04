import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RequirementDocumentType = RequirementDocument & Document;

@Schema({ timestamps: true })
export class RequirementDocument {
  @Prop()
  title: string;

  @Prop()
  blocks: Array<any>;
}

export const RequirementDocumentSchema = SchemaFactory.createForClass(RequirementDocument);
