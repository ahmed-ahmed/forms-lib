import { IControlProps } from '../shared/IControlProps';

export interface IDatePickerProps extends IControlProps {
  value: Date;
  autofocus;
  defaultValue;
  format: string;
}
