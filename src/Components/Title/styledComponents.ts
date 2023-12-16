import styled from 'styled-components/native';

export const TitleText = styled.Text`
  font-family: 'open-sans-bold';
  font-size: 24px;
  color: white;
`;

export const TitleContainer = styled.View<{ style?: React.CSSProperties }>`
  border: 2px solid white;
  padding: 6px 10px;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  border-radius: 2px;
`;
