import { Dispatch, SetStateAction } from 'react';

import { InputField } from './styledComponents';

interface Props {
  value: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}
const Input = (props: Props): React.ReactElement => {
  const { value, setInputValue } = props;

  const onChangeText = (text: string) => {
    setInputValue(text);
  };

  return (
    <InputField
      maxLength={2}
      onChangeText={onChangeText}
      value={value}
      keyboardType='number-pad'
    />
  );
};

export default Input;
