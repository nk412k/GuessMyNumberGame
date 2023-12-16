import styled from 'styled-components';
import { View, Image, Text } from 'react-native';

import Colors from '../../Constants/Colors';

export const ScreenContainer = styled(View)`
  padding: 20px;
  flex: 1;
  align-items: center;
  margin-top: 120px;
`;

export const ImageContainer = styled(View)`
  border-radius: 100px;
  height: 200px;
  width: 200px;
  overflow: hidden;
  margin-top: 20px;
  border: 2px solid black;
  margin-bottom: 24px;
`;

export const GameOverImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const GameOverText = styled(Text)`
  font-family: 'open-sans';
  font-size: 22px;
  color: black;
  margin-bottom: 24px;
  text-align: center;
`;

export const GameOverHighlightedText = styled(Text)`
  font-family: 'open-sans-bold';
  font-size: 22px;
  color: ${Colors.primary700};
`;
