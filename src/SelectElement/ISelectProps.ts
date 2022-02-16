import { IControlProps } from "../shared/IControlProps";

export interface ValueLabel {
  value: string,
  label: string
}

export interface ISelectProps extends IControlProps {
  defaultValue?: ValueLabel,
  value: ValueLabel,
  options: ValueLabel[],
  isLoading: boolean
}
