import { CardContainer } from './styledComponents';

interface Props extends React.PropsWithChildren {}

const Card = (props: Props): React.ReactElement => {
  const { children } = props;

  return <CardContainer>{children}</CardContainer>;
};

export default Card;
