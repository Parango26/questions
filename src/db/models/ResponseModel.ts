import { createSchema, Type, typedModel } from 'ts-mongoose';
import mongoose from '../dbConfig'

const ResponseSchema = createSchema(
  {
    description: Type.string({required: true}),
    userCreation: Type.objectId({required: true}),
    userPoints: Type.array(),
  }
)

const Response = typedModel('Users', ResponseSchema, undefined, undefined, undefined, mongoose);

export default Response