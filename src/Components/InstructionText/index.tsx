import { InstructionText } from './styledComponents';

interface Props extends React.PropsWithChildren {}

const InstructionTextComponent = (props: Props): React.ReactElement => {
  const { children } = props;

  return <InstructionText>{children}</InstructionText>;
};

export default InstructionTextComponent;
