import { TitleContainer, TitleText } from './styledComponents';

interface Props extends React.PropsWithChildren {
  containerStyle?: React.CSSProperties;
}
const Title = (props: Props): React.ReactElement => {
  const { containerStyle } = props;
  return (
    <TitleContainer style={containerStyle}>
      <TitleText>{props.children}</TitleText>
    </TitleContainer>
  );
};

export default Title;
