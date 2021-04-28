import { createSchema, Type, typedModel } from 'ts-mongoose';
import mongoose from '../dbConfig'

const UserSchema = createSchema(
  {
    name: Type.string({required: true}),
    lastName: Type.string({required: true}),
    email: Type.string({required: true}),
    totalPoints: Type.number(),
    companyId: Type.string()
  }
)

const User = typedModel('users', UserSchema, undefined, undefined, undefined, mongoose);

export default User