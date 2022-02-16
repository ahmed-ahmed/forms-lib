import React, { useState } from "react";
import Select from "react-select";
import classNames from "classnames/bind";
import useIsValid from "../hooks/isValid";
import { ValidationMessage } from "../ValidationMessage";
import { IoChevronDownOutline, IoSearch } from "react-icons/io5";
import styled from 'styled-components';
import { ISelectProps } from './ISelectProps';
import { Dropdown } from "./Dropdown";
import SelectedElement from "./selctedElement";

const selectStyles = {
  control: provided => {
  },
  valueContainer: provided => ({
    ...provided,
    border: 'none'
  }
  ),
  input: provided => ({
    ...provided,
    height: '40px',
    width: '100%',
    marginLeft: '3px',
    placeholder: 'ww'
  }
  ),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};

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

  const { schemaKey, value, options, required, onChange, isLoading = false } = props;
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
    onChange?.(selectedItem.value, selectedItem.label);
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
