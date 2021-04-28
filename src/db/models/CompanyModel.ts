import { createSchema, Type, typedModel } from 'ts-mongoose';
import mongoose from '../dbConfig'

const CompanySchema = createSchema(
  {
    name: Type.string({required: true})
  }
)

const Company = typedModel('Companys', CompanySchema, undefined, undefined, undefined, mongoose);

export default Company