import { IControlProps } from "../shared/IControlProps";

export enum TextBoxTypeEnum {
  'input',
  'textarea',
  'email',
}

export interface ITextBoxProps extends IControlProps {
  /**
   * Pass the value for the text box
   * @description        You can also explicitly add a description name
  */
  type?: TextBoxTypeEnum;
  placeHolder?: string;
  value?: string;
  defaultValue?: string;
  autofocus?: boolean;
}
