import { IControlProps } from "../shared/IControlProps";
import { ValueLabel } from '../../es/SelectElement/ISelectProps.d';

export default interface IRelationShipProps extends IControlProps {
  value: ValueLabel;
  defaultValue: ValueLabel;
  groupBy: string;
  labelField: string;
  valueField: string;

  url: string;
}
