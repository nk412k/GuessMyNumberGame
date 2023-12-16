import {
  GuessNumberLogItemContainer,
  GuessNumberLogItemText,
} from './styledComponents';

interface Props extends React.PropsWithChildren {
  index: number;
  guessNumber: number;
}
const GuessNumberLogItem = (props: Props): React.ReactElement => {
  const { index, guessNumber } = props;
  return (
    <GuessNumberLogItemContainer>
      <GuessNumberLogItemText>{`#${index}`}</GuessNumberLogItemText>
      <GuessNumberLogItemText>
        Opponent's Guess: {guessNumber}
      </GuessNumberLogItemText>
    </GuessNumberLogItemContainer>
  );
};

export default GuessNumberLogItem;
