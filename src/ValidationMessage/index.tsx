import React from 'react';

export function ValidationMessage(props: any) {
  return (props.invalid && <label data-testid='error'
    className="error text-red-500 clear-both">{props.message}</label>) || <></>
}
