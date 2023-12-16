import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { GameStatus } from './src/types';
import Colors from './src/Constants/Colors';
import GameOverScreen from './src/Screens/GameOverScreen';
import StartGameScreen from './src/Screens/StartGameScreen';
import GameInprogressScreen from './src/Screens/GameInprogressScreen';

import {
  MainBackground,
  MainContainer,
  ScreenContainer,
} from './styledComponents';

const { IN_PROGRESS, GAME_START, GAME_OVER } = GameStatus;

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameStatus, setGameStatus] = useState(GAME_START);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
  });

  const onStartNewGame = () => {
    setUserNumber(null);
    setGameStatus(GAME_START);
    setGuessRounds([]);
  };

  const renderScreen = () => {
    switch (gameStatus) {
      case GAME_START:
        return (
          <StartGameScreen
            setUserNumber={setUserNumber}
            setGameStatus={setGameStatus}
          />
        );
      case IN_PROGRESS:
        return (
          <GameInprogressScreen
            gameRounds={guessRounds}
            setGameRounds={setGuessRounds}
            setGameStatus={setGameStatus}
            userNumber={userNumber as number}
          />
        );
      case GAME_OVER:
        return (
          <GameOverScreen
            userNumber={userNumber as number}
            onStartNewGame={onStartNewGame}
            gameRounds={guessRounds}
          />
        );
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <MainContainer colors={[Colors.primary700, Colors.accent500]}>
      <MainBackground
        source={require('./assets/Images/background.png')}
        imageStyle={{ opacity: 0.15 }}
        resizeMode='cover'
      >
        <ScreenContainer>{renderScreen()}</ScreenContainer>
      </MainBackground>
    </MainContainer>
  );
}
