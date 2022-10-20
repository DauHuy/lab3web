import React from 'react';
import MyButton1 from './button/button1';

const second = {
  text: 'Second Button',
    disabled: true
}

function exercise13({}){
  return(
    <main>
      <MyButton1/>
      <MyButton1 text={second.text} disabled={second.disabled}/>
    </main>
  )
}



export default exercise13;