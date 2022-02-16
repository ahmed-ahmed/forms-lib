import React, { useState } from "react";
import Select from "react-select";
import classNames from "classnames/bind";
import useIsValid from "../hooks/isValid";
import { ValidationMessage } from "../ValidationMessage";
import { IoSearch } from "react-icons/io5";
import styled from 'styled-components';
import { ISelectProps } from './ISelectProps';
import { Dropdown } from "./Dropdown";
import SelectedElement from "./selctedElement";

const SvgStyled = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
`

const DropdownIndicator = () => (
  <SvgStyled> <IoSearch /> </SvgStyled>
);

export default function SelectElement(props: ISelectProps) {
  const [ivalue, setIvalue] = useState<any>(props.value || props.defaultValue || '');

  const { schemaKey, value, options, onChange, isLoading = false } = props;
  const { error, errorMessage, setIsDirty } = useIsValid({ schemaKey, value, schema: { ...props } });

  const [isOpen, setIsOpen] = useState<boolean>();

  const close = () => {
    setIsOpen(false)
    setIsDirty(true)
  }
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  };
  const handleChange = (selectedItem) => {
    toggleOpen();
    setIvalue(selectedItem);
    onChange?.(selectedItem);
  };

  return (
    <>
      <Dropdown
        isOpen={isOpen}
        onClose={close}
        target={
          <SelectedElement isLoading={isLoading} value={ivalue} toggleOpen={toggleOpen} title={props.title?.toLowerCase()} />
        }>
        <Select
          backspaceRemovesValue={false}
          controlShouldRenderValue={false}
          isClearable={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          menuIsOpen={true}
          autoFocus
          placeholder="Search..."
          className={classNames('react-select-container', { error })}
          classNamePrefix="react-select"
          onChange={handleChange}
          value={ivalue}
          options={options}
        />
      </Dropdown>
      <ValidationMessage invalid={error} message={errorMessage} />
    </>

  )

}
