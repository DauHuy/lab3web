import React from 'react';

const MyButton1= ( {disabled, text }) =>  (
  <button disabled={disabled}>{text}</button>
);

MyButton1.defaultProps = {
  text: 'My Button',
  disabled: false,
}

export default MyButton1;