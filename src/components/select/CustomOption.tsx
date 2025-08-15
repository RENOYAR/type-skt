// @ts-nocheck
import CheckBox from 'components/checkbox/Checkbox';
import {components} from 'react-select';

export default function CustomOption(props) {
  const {label, value} = props.data;
  const id = `checkbox-${value}`;
  const isAllOption = value === '*';

  const checkAllSelected = () => {
    if (isAllOption) {
      const optionsCount = props.selectProps.options
        ? props.selectProps.options.length - 1
        : 0;
      const valuesCount = props.selectProps.value
        ? props.selectProps.value.length
        : 0;
      return valuesCount === optionsCount;
    }
    return props.isSelected;
  };

  const handleChange = () => {
    let newSelectedOptions;

    if (isAllOption) {
      if (!checkAllSelected()) {
        newSelectedOptions = props.selectProps.options.filter(
          opt => opt.value !== '*',
        );
      } else {
        newSelectedOptions = [];
      }
    } else {
      if (props.isSelected) {
        newSelectedOptions = props.selectProps.value.filter(
          opt => opt.value !== value,
        );
      } else {
        newSelectedOptions = [...props.selectProps.value, props.data];
      }
    }
    props.selectProps.onChange(newSelectedOptions);
  };

  return (
    <components.Option {...props}>
      <CheckBox
        id={id}
        name={props.selectProps.name}
        htmlFor={id}
        text={label}
        checked={checkAllSelected()}
        onChange={handleChange}
      />
    </components.Option>
  );
}
