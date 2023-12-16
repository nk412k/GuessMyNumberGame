import styled from 'styled-components';
import { ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const MainContainer = styled(LinearGradient)`
  flex: 1;
`;

export const MainBackground = styled(ImageBackground)`
  flex: 1;
`;

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
`;
