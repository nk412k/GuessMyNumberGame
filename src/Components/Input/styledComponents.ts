import styled from 'styled-components/native';
import Colors from '../../Constants/Colors';

export const InputField = styled.TextInput`
  border-bottom-width: 2px;
  border-color: ${Colors.accent500};
  text-align: center;
  width: 50px;
  color: ${Colors.accent500};
  font-family: 'open-sans-bold';
  font-size: 24px;
  margin-top: 12px;
`;
