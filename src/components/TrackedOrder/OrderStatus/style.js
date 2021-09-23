import styled from 'styled-components';
import media from '../../UIElements/media';
import { Card } from 'antd';

export const TypeOfPaymentCard = styled.div`
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 0px;
  ${media.mobile`
  font-size:10px;
  width:80%;
  `}
  ${media.ipadPro`
  font-size:10px;
  width:80%;
  `}
`;

export const TypeOfPayment = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.06em;
  margin-bottom: 0px;
  text-transform: uppercase;
  color: ${(props) => {
    if (props.type === 'DL') return '#65BF73';
    if (props.type === 'OC' || props.type.includes('RT')) return '#EB5950';
    if (props.type === 'OO') return '#F1C40F';
    if (props.type === 'NDR') return '#d35400';
    return '#263F97';
  }};
`;

export const CustomImg = styled.img`
  ${media.mobile`
margin-right:10px;
`}
`;
export const LocationCard = styled(Card)`
  ${media.mobile`
display:none;
`}
`;

export const CardX = styled(Card)`
  background: ${(props) => {
    if (props.type === 'DL') return '#65BF73';
    if (props.type === 'OC' || props.type.includes('RT')) return '#EB5950';
    if (props.type === 'OO') return '#F1C40F';
    if (props.type === 'NDR') return '#d35400';
    return '#263F97';
  }};
`;
