import Colors from '../../Constants/Colors';

import {
  ButtonContainer,
  ButtonText,
  PressableContainer,
} from './styledComponents';

interface Props extends React.PropsWithChildren {
  onPress: () => void;
  buttonStyles?: React.CSSProperties;
}
const Button = (props: Props): React.ReactElement => {
  const { children, onPress, buttonStyles } = props;
  return (
    <ButtonContainer style={buttonStyles}>
      <PressableContainer
        onPress={onPress}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        android_ripple={{ color: Colors.primary700 }}
      >
        <ButtonText>{children}</ButtonText>
      </PressableContainer>
    </ButtonContainer>
  );
};

export default Button;
