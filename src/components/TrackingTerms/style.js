import styled from 'styled-components';
import media from '../UIElements/media';

export const CustomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  width: 33%;
  padding: 8px;
  ${media.mobile`
width: 100%;
`}
  ${media.tablet`
width: 100%;
`}
  ${media.ipadPro`
width: 100%;
`}
`;
