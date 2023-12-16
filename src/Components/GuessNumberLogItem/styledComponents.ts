import styled from 'styled-components/native';
import Colors from '../../Constants/Colors';

export const GuessNumberLogItemContainer = styled.View`
  border: 1px solid ${Colors.primary800};
  border-radius: 50px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${Colors.accent500};
  padding: 10px 16px;
  margin-bottom: 10px;
`;

export const GuessNumberLogItemText = styled.Text`
  font-family: 'open-sans';
  font-size: 14px;
  color: ${Colors.primary800};
`;
