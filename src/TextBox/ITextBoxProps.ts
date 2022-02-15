import { ITextBoxSchema } from "../schema/ItextBoxSchema";
import { TextBoxSchema } from "../schema/TextBoxSchema";

export enum TextBoxTypeEnum {
  'input',
  'textarea',
  'email',
}

export interface ITextBoxProps {
  /**
 * Pass the value for the text box
 * @description        You can also explicitly add a description name
 */

  value?: string,
  defaultValue?: string,
  schema?: ITextBoxSchema,
  schemaKey?: string,
  onChange?,
  onValidationChange?,
  validateImmediately?,
  customValidations?
  [key: string]: any;
}

export class TextBoxProps implements ITextBoxProps {
  constructor() {
    this.schema = new TextBoxSchema()
  }
  schemaKey?: string;
  onChange?: any;
  onValidationChange?: any;
  /**
   * true: validate once rendered
   * false: validate on blur
   * @default false
   */
  validateImmediately?: boolean = false;
  customValidations?: any;
  defaultValue?: string;
  value?: string;
  schema?: ITextBoxSchema;
}
