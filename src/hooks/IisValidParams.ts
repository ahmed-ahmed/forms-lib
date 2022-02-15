import { IValidationSchema, ValidationSchema } from "../schema/IValidationSchema";

export interface IisValidParams {
  schemaKey: string,
  value: string,
  schema: IValidationSchema,
  onValidationChange,
  validateImmediately,
  customValidations
}

export class IsValidParams implements IisValidParams {
  constructor() {
    this.schema = new ValidationSchema();
  }
  schemaKey: string;
  value: string;
  schema: IValidationSchema;
  onValidationChange: any;
  validateImmediately: any;
  customValidations: any;
}
