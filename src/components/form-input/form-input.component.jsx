import { Group, FormInputStyle, FormInputLabel } from "./form-input.styles";
const FormInput = (props) => {
  const { label, ...inputOptions } = props;

  return (
    <Group>
      <FormInputStyle {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
