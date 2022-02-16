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
