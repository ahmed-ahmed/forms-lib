import { IControlSchema } from './IControlSchema';

export interface IValidationSchema extends IControlSchema {
  required?: boolean,
  maxLength?: number,
  minLength?: number,
  regex?: string,
  validations?: any
}

export class ValidationSchema implements IValidationSchema {
  constructor() {

  }
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  regex?: string;
  validations?: any;
  title: string;
  autofocus?: boolean;
  placeHolder?: string;

}
