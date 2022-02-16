import { IValidationProps } from "../hooks/IisValidParams";

export interface IControlProps extends IValidationProps {
  title?: string;
  schemaKey?: string;
  onChange?: any;
}
