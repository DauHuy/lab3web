import React from "react";
import MyButton from "./button/mybottun";
import MyList from  "./List/List";


const appState = {
  text: 'My Button',
  disabled: true,
  items: ['Firts', 'Second', 'Third']
}
appState.items.push("Fourth");

function exercise12 (props) {
  return(
    <main>
      {/* <MyButton text={props.text} disabled={props.disabled}></MyButton>
      <MyList items={props.items}></MyList> */}
      <button disabled={false}>{appState.text}</button>
      <ul>
        {
        appState.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </main>
  )
}

//render(appState);

setTimeout(()=>{
  appState.disabled = false;
  appState.items.push("Fourth");
  //render(appState)
}, 1000);

export default exercise12;