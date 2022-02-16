import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'daterangepicker'
import moment from "moment";
import { ValidationMessage } from "../ValidationMessage";
import useIsValid from "../hooks/isValid";
import { IDatePickerProps } from './IDatePickerProps';

export default function DatePicker(props: IDatePickerProps) {
  const format = props.format || 'MM/DD/YYYY';
  const [ivalue, setIvalue] = useState<Date>(props.value || props.defaultValue || '');
  const { required, onChange, schemaKey, onValidationChange } = props;
  const { error, errorMessage, setIsDirty, isValid } =
    useIsValid({ schemaKey, value: ivalue, schema: { ...props }, onValidationChange });

  const myRef = React.createRef();
  useEffect(() => {
    const node = myRef.current;
    $(node).daterangepicker({
      autoUpdateInput: false,
      singleDatePicker: true,
      autoApply: true,
      locale: { format }
    });
    $(node).on('change', (ev) => {
      handleChange?.(ev.target.value);
    })
    $(node).on('apply.daterangepicker', (ev, picker) => {
      $(node).val(picker.startDate.format(format))
      handleChange(picker.startDate.toDate());
    })
  }, []);

  useEffect(() => {
    if (props.value) {
      const node = myRef.current;
      $(node).val(moment(props.value).format(format))
    }
  }, [props.value, ivalue]);

  function handleChange(value) {
    setIvalue(value);
    return onChange?.(value);
  }

  function handleBlur() {
    setIsDirty(true);
  }

  return <>
    <input ref={myRef} type="text"
      className="form-control"
      onBlur={handleBlur}
      required={required}
      autoFocus={props.autofocus}
    />
    <div> {isValid}</div>
    <ValidationMessage invalid={error} message={errorMessage} />
  </>

}
