import styled from 'styled-components/native';
import Colors from '../../Constants/Colors';

export const ScreenContainer = styled.View`
  padding: 16px;
  margin-top: 50px;
  align-items: center;
  flex: 1;
`;

export const GuessNumberContainer = styled.View`
  margin-top: 16px;
  border: 3px solid ${Colors.accent500};
  border-radius: 6px;
  padding: 20px 100px;
  margin-bottom: 16px;
`;

export const GuessNumber = styled.Text`
  color: ${Colors.accent500};
  font-family: 'open-sans-bold';
  font-size: 28px;
`;

export const ButtonsContainers = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const GuessRoundLogContainer = styled.View`
  margin-top: 16px;
  flex: 1;
  height: 200px;
  flex-direction: column;
  padding: 0px 30px;
`;
