import styled from 'styled-components/native';

import Colors from '../../Constants/Colors';

export const ButtonContainer = styled.View<{ style?: React.CSSProperties }>`
  background-color: ${Colors.primary500};
  border-radius: 50px;
  min-width: 120px;
`;

export const PressableContainer = styled.Pressable`
  padding: 6px 20px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'open-sans';
  color: white;
`;
