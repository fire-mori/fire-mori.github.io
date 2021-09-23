import { ReactComponent as IconHorse } from '../../assets/icon-horse.svg';
import styled from 'styled-components';

export const Icon = styled(IconHorse)<{ color: string }>`
  margin: auto 10px;
  padding: 20px 0px;

  path {
    fill: ${(p) => p.color};
  }
`;
