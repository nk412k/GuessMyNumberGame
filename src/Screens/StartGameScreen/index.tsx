import { Alert } from 'react-native';
import { Dispatch, SetStateAction, useState } from 'react';

import Title from '../../Components/Title';
import Card from '../../Components/Card';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import InstructionTextComponent from '../../Components/InstructionText';

import { ButtonsContainer, ScreenContainer } from './styledComponents';
import { GameStatus } from '../../types';

interface Props {
  setUserNumber: Dispatch<SetStateAction<null | number>>;
  setGameStatus: Dispatch<SetStateAction<GameStatus>>;
}

const { IN_PROGRESS } = GameStatus;

const StartGameScreen = (props: Props): React.ReactElement => {
  const { setUserNumber, setGameStatus } = props;

  const [userInput, setUserInput] = useState('');

  const onClickReset = () => {
    setUserInput('');
  };

  const onClickConfirm = () => {
    if (
      userInput === '' ||
      isNaN(parseInt(userInput)) ||
      parseInt(userInput) <= 0 ||
      parseInt(userInput) > 100
    ) {
      return Alert.alert('Invalid Input', 'Input has to be between 1 and 100', [
        { text: 'Okay', style: 'cancel' },
      ]);
    } else {
      setGameStatus(IN_PROGRESS);
      setUserNumber(parseInt(userInput));
    }
  };

  return (
    <ScreenContainer>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionTextComponent>Enter a Number</InstructionTextComponent>
        <Input value={userInput} setInputValue={setUserInput} />
        <ButtonsContainer>
          <Button onPress={onClickReset} buttonStyles={{ marginRight: 10 }}>
            Reset
          </Button>
          <Button onPress={onClickConfirm}>Confirm</Button>
        </ButtonsContainer>
      </Card>
    </ScreenContainer>
  );
};

export default StartGameScreen;
