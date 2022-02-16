import React from 'react'
import classNames from 'classnames/bind';
import { ValidationMessage } from "../ValidationMessage";
import useIsValid from '../hooks/isValid';
import { useState } from 'react';
import { ITextBoxProps, TextBoxTypeEnum } from './ITextBoxProps';

export default function TextBox(props: ITextBoxProps) {
  const [ivalue, setIvalue] = useState<string>(props.value || props.defaultValue || '');
  let regex = props.regex;
  let InputType: any = 'input';
  switch (props.type) {
    case TextBoxTypeEnum.textarea:
      InputType = 'textarea'
      break;
  }

  if (props.type === TextBoxTypeEnum.email) {
    regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  }



  const { schemaKey, onChange, onValidationChange, validateImmediately, customValidations } = props
  const { error, errorMessage, setIsDirty, isValid } =
    useIsValid({ schemaKey, value: ivalue, schema: { ...props, regex }, onValidationChange, validateImmediately, customValidations });



  function handleChange(c) {
    setIvalue(c.target.value);
    if (onChange)
      return onChange(c.target.value);
  }

  function handleBlur() {
    setIsDirty(true);
  }

  return <>
    <InputType className={classNames('form-control', { error })}
      data-testid={schemaKey}
      required={props?.required}
      autoFocus={props?.autofocus}
      value={ivalue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={props?.placeHolder || props?.title} />

    <div>{isValid}</div>
    <ValidationMessage invalid={error} message={errorMessage} />
  </>

}
