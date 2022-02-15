import { TextBoxTypeEnum } from '../TextBox/ITextBoxProps';
import { ITextBoxSchema } from './ItextBoxSchema'

export class TextBoxSchema implements ITextBoxSchema {
  constructor() {
    this.type = TextBoxTypeEnum.input
    this.title = 'Text Box'
  }
  type: TextBoxTypeEnum;
  regex?: any;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  validations?: any;
  title: string;
  autofocus?: boolean;
}
