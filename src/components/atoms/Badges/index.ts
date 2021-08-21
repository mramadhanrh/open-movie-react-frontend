import styled, { ColorVariant } from 'styled-components';
import defaultTheme from '../../../constants/theme';

interface BadgesProps {
  color?: ColorVariant;
  textColor?: ColorVariant;
}

const Badges = styled.div<BadgesProps>`
  background-color: ${({ color }) => defaultTheme.color[color || 'ecstasy']};
  border-radius: 3px;
  font-weight: 500;
  color: ${({ textColor }) => defaultTheme.color[textColor || 'white']};
  width: fit-content;
  padding: 5px 10px;
  font-size: 12px;
`;

export default Badges;
