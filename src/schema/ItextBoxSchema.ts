import { TextBoxTypeEnum } from "../TextBox/ITextBoxProps";
import { IValidationSchema } from "./IValidationSchema";

export interface ITextBoxSchema extends IValidationSchema {
  type?: TextBoxTypeEnum;
  regex?: any;
}
