import React from 'react';
import styled from 'styled-components';

const MenuDiv = styled.div`
  background-color: #fff;
  border-radius: 0;
  margin-top: 3px;
  position: absolute;
  z-index: 2;
  width:100%;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border: solid 1px rgb(209,213,219);
`

const DropdownDiv = styled.div`
  position: relative;
  width: 100%
`
const BlanketDiv = styled.div`
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  position: fixed;
  zIndex: 1;
`

const Dropdown = ({ children, isOpen, target, onClose }) => (
  <DropdownDiv>
    {target}
    {isOpen ? <MenuDiv>{children}</MenuDiv> : null}
    {isOpen ? <BlanketDiv onClick={onClose} /> : null}
  </DropdownDiv>
);


export {
  Dropdown
}
