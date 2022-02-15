import React from 'react'
import classNames from 'classnames/bind';
import { ValidationMessage } from "../ValidationMessage";
import useIsValid from '../hooks/isValid';
import { useState } from 'react';
import { TextBoxProps, TextBoxTypeEnum } from './ITextBoxProps';

export default function TextBox(props: TextBoxProps) {
  const [ivalue, setIvalue] = useState<string>(props.value || props.schema?.defaultValue || '');

  const { schemaKey, schema, onChange, onValidationChange, validateImmediately, customValidations } = props

  const { error, errorMessage, setIsDirty, isValid } =
    useIsValid({ schemaKey, value: ivalue, schema, onValidationChange, validateImmediately, customValidations });

  let InputType: any = 'input';

  switch (schema?.type) {
    case TextBoxTypeEnum.textarea:
      InputType = 'textarea'
      break;
  }

  if (schema?.type === TextBoxTypeEnum.email) {
    schema.regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  }

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
      required={schema?.required}
      autoFocus={schema?.autofocus}
      value={ivalue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={schema?.placeHolder || schema?.title} />

    <div>{isValid}</div>
    <ValidationMessage invalid={error} message={errorMessage} />
  </>

}
