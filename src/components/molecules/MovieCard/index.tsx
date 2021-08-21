import { FC } from 'react';
import { MovieResultType } from '../../../interfaces/movie';
import Badges from '../../atoms/Badges';
import { BadgesWrapper, InfoWrapper, Card, CardImage } from './style';

interface MovieCardProps {
  id: string;
  title?: string;
  picture?: string;
  type?: MovieResultType;
  year?: string;
  onClick?(id: string): void;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  picture,
  type,
  year,
  onClick = () => {},
}) => (
  <Card onClick={() => onClick(id)}>
    <CardImage src={picture} />
    <InfoWrapper>
      <h1>{title}</h1>
      <BadgesWrapper>
        <Badges color="primary">{type}</Badges>
        <Badges>{year}</Badges>
      </BadgesWrapper>
    </InfoWrapper>
  </Card>
);

export default MovieCard;
