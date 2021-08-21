import { FC } from 'react';
import { MovieResultType } from '../../../interfaces/movie';
import Badges from '../../atoms/Badges';
import { BadgesWrapper, InfoWrapper, Card, CardImage } from './style';

interface MovieCardProps {
  title?: string;
  picture?: string;
  type?: MovieResultType;
  year?: string;
}

const MovieCard: FC<MovieCardProps> = ({ title, picture, type, year }) => (
  <Card>
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
