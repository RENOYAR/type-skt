// @ts-nocheck
import {components} from 'react-select';

export default function CustomInput(props) {
  return (
    <components.Input
      {...props}
      id={props.selectProps.inputId}
      name={props.selectProps.name}
    />
  );
}
