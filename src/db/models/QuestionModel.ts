import { createSchema, Type, typedModel } from 'ts-mongoose';
import mongoose from '../dbConfig'

const QuestionSchema = createSchema(
  {
    question: Type.string({required: true}),
    description: Type.string({required: true}),
    responses: Type.schema(),
    attachFiles: Type.array(),
    userPoints: Type.array(),
    companyId: Type.objectId({required: true}),
    userCreation: Type.objectId({required: true}),
  }
)

const Question = typedModel('Users', QuestionSchema, undefined, undefined, undefined, mongoose);

export default Question