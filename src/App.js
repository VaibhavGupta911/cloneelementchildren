import { cloneElement, Children } from 'react';
const RadioGroup1 = (props) => {
  const RenderChildren = () => (
    Children.map(
      props.children, child => { return cloneElement(child, { name: props.name }) }
    )
  )
  return (
    <div>
      {<RenderChildren />}
    </div>
  )
}
const RadioButton = (props) => {
  return (
    <label>
      <input type='radio' value={props.value} name={props.name} />
      {props.children}
    </label>
  )
}
export default function App() {
  return (

    <RadioGroup1 name="numbers">
      <RadioButton value="first" >First</RadioButton>
      <RadioButton value="second">Second</RadioButton>
      <RadioButton value="third">Third</RadioButton>
    </RadioGroup1>

  );
}