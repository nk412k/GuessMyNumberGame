import { Ionicons } from '@expo/vector-icons';
import { Alert, FlatList } from 'react-native';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { GameStatus } from '../../types';
import Card from '../../Components/Card';
import Title from '../../Components/Title';
import Button from '../../Components/Button';
import { getGuessNumber } from '../../utils/GameUtils';
import InstructionText from '../../Components/InstructionText';
import GuessNumberLogItem from '../../Components/GuessNumberLogItem';

import {
  ButtonsContainers,
  GuessRoundLogContainer,
  GuessNumber,
  GuessNumberContainer,
  ScreenContainer,
} from './styledComponents';

const directionConstant = {
  higher: 'Higher',
  lower: 'Lower',
};

interface Props {
  userNumber: number;
  setGameStatus: Dispatch<SetStateAction<GameStatus>>;
  gameRounds: number[];
  setGameRounds: Dispatch<SetStateAction<number[]>>;
}

let lowerLimit = 0;
let upperLimit = 100;

const GameInprogressScreen = (props: Props): React.ReactElement => {
  const { userNumber, setGameStatus, gameRounds, setGameRounds } = props;
  const initialGuess = getGuessNumber(0, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    lowerLimit = 0;
    upperLimit = 100;

    setGameRounds([initialGuess]);
  }, []);

  useEffect(() => {
    if (userNumber === currentGuess) {
      setGameStatus(GameStatus.GAME_OVER);
    }
  }, [userNumber, currentGuess]);

  const onSelectDirection = (direction: string): void => {
    if (
      (userNumber < currentGuess && direction === directionConstant.higher) ||
      (userNumber > currentGuess && direction === directionConstant.lower)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === directionConstant.higher) {
      lowerLimit = currentGuess + 1;
    } else {
      upperLimit = currentGuess - 1;
    }
    const guessNumber = getGuessNumber(lowerLimit, upperLimit, currentGuess);
    setCurrentGuess(guessNumber);
    setGameRounds((previousRounds) => [guessNumber, ...previousRounds]);
  };

  const renderButtons = (): React.ReactElement => {
    return (
      <ButtonsContainers>
        <Button
          onPress={() => onSelectDirection(directionConstant.lower)}
          buttonStyles={{ marginRight: 10 }}
        >
          <Ionicons name='md-remove' size={24} />
        </Button>
        <Button onPress={() => onSelectDirection(directionConstant.higher)}>
          <Ionicons name='md-add' size={24} />
        </Button>
      </ButtonsContainers>
    );
  };

  const renderItem = (itemData: {
    item: number;
    index: number;
  }): React.ReactElement => {
    return (
      <GuessNumberLogItem
        index={gameRounds.length - itemData.index}
        guessNumber={itemData.item}
      />
    );
  };

  return (
    <ScreenContainer>
      <Title containerStyle={{ paddingLeft: 28, paddingRight: 28 }}>
        Opponent's Guess
      </Title>
      <GuessNumberContainer>
        <GuessNumber>{currentGuess}</GuessNumber>
      </GuessNumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        {renderButtons()}
      </Card>
      <GuessRoundLogContainer>
        <FlatList data={gameRounds} renderItem={renderItem} />
      </GuessRoundLogContainer>
    </ScreenContainer>
  );
};

export default GameInprogressScreen;
