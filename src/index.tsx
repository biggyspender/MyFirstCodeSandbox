import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import  Model from "./Model";
import { observer } from "mobx-react";
import { Toggle } from "./Toggle";
import delay from "./delay";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
interface IAppProps{
  model:Model;
}
const App = observer((appProps:IAppProps) => {
  let { model } = appProps;
  return (<div style={styles}>
    <Hello name={model.fooName} />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <input
      type="text"
      value={model.name}
      onChange={e => (model.name = e.currentTarget.value)}
    />
    <br />
    <br />
    {model.slots.map((s: boolean, i: Number) => (
      <Toggle
        key={i}
        toggled={s}
        onToggle={e => {
          console.log(e);
          model.slots[i] = e;
        }}
      />
    ))}
    <br />
    {model.slots.map(s => <span>{s.toString()} </span>)}
  </div>)
};
const model = new Model();
function go() {
  let prevSlot = -1;
  let idx = 0;
  setInterval(() => {
    if (prevSlot >= 0) {
      model.slots[prevSlot] = false;
    }
    model.slots[idx] = true;
    prevSlot = idx;
    idx = (idx + 1) % model.slots.length;
  }, 100);
}
go();
render(<App model={model} />, document.getElementById("root"));
