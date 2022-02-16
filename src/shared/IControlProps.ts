export interface IControlProps extends IValidationProps {
  title?: string;
  schemaKey?: string;
  onChange?: any;
}

export interface IValidationProps {
  onValidationChange?: any;
  /**
   * true: validate once rendered
   * false: validate on blur
   * @default false
   */
  validateImmediately?: boolean;
  customValidations?
  regex?: any;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  validations?: any;

}
