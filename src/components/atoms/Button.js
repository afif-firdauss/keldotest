import React from 'react';

export default function Button({ title, ...rest }) {
  return (
    <button {...rest}>{title}</button>
  )
}
