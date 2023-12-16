import Button from '../../Components/Button';
import Title from '../../Components/Title';

import {
  GameOverHighlightedText,
  GameOverImage,
  GameOverText,
  ImageContainer,
  ScreenContainer,
} from './styledComponents';

interface Props {
  userNumber: number;
  onStartNewGame: () => void;
  gameRounds: number[];
}

const GameOverScreen = (props: Props): React.ReactElement => {
  const { onStartNewGame, gameRounds, userNumber } = props;

  return (
    <ScreenContainer>
      <Title>Game Over!</Title>
      <ImageContainer>
        <GameOverImage
          source={require('./../../../assets/Images/success.png')}
          alt='success'
        />
      </ImageContainer>
      <GameOverText>
        Your phone needed
        <GameOverHighlightedText> {gameRounds.length} </GameOverHighlightedText>
        rounds to guess the number
        <GameOverHighlightedText> {userNumber} </GameOverHighlightedText>
      </GameOverText>
      <Button onPress={onStartNewGame}>Start New Game</Button>
    </ScreenContainer>
  );
};

export default GameOverScreen;
