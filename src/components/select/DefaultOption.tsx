// @ts-nocheck
import {components} from 'react-select';

export default function DefaultOption(props) {
  return <components.Option {...props}>{props.label}</components.Option>;
}
