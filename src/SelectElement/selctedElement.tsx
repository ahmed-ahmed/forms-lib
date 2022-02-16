import React from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import styled from 'styled-components';

const SelectedDiv = styled.div`
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    `

export default function SelectedElement({ isLoading, toggleOpen, value, title }) {
  return <>
    {!isLoading && <SelectedDiv onClick={toggleOpen} className='ac-selected form-control'>
      <span>{value ? `${value.label}` : `Select ${title?.toLowerCase()}`}</span>
      <IoChevronDownOutline />
    </SelectedDiv>}
    {isLoading && <SelectedDiv onClick={toggleOpen} className='ac-selected form-control'>
      <span>Loading......</span>
      <IoChevronDownOutline />
    </SelectedDiv>}
  </>
}
