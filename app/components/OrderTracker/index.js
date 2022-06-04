import React from 'react';
import { Timeline } from 'antd';
import moment from 'moment';
import orderStatusMapping from '../../../orderStatusMapping';
import {
  CheckCircleFilled,
  CarFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { SmallerText, CommonSubText } from '../../UIElements';

const OrderTracker = ({ data }) => {
  const getDot = (status) => {
    if (status === 'DL')
      return (
        <CheckCircleFilled style={{ fontSize: '16px', color: '#65BF73' }} />
      );
    if (status === 'OO')
      return <CarFilled style={{ fontSize: '16px', color: '#F1C40F' }} />;
    if (status === 'OC')
      return <CloseCircleFilled style={{ fontSize: '16px' }} />;
    if (status === 'NDR')
      return (
        <ExclamationCircleFilled
          style={{ fontSize: '16px', color: '#d35400' }}
        />
      );
  };
  const getColor = (status) => {
    if (status === 'OC' || (status && status.includes('RT'))) return 'red';
  };

  return (
    <>
      <Timeline style={{ marginTop: '20px' }}>
        {data &&
          data.track_arr &&
          data.track_arr[0] &&
          Object.keys(data.track_arr[0]).length &&
          Array.from(data.track_arr)
            .reverse()
            .map((item, index) => (
              <React.Fragment key={item?.status_name + index}>
                {Array.from(item?.status_array)
                  .reverse()
                  .map((data, index) => (
                    <Timeline.Item
                      dot={getDot(item?.status_name)}
                      key={data?.status_body + index}
                      color={getColor(item?.status_name)}
                    >
                      <SmallerText size={2} style={{ fontWeight: 'bold' }}>
                        {window.location.host === 'oziva.pickrr.com'
                          ? data && orderStatusMapping[item.status_name]
                          : data?.status_body}
                      </SmallerText>
                      <CommonSubText opacity={2} style={{ marginBottom: '0' }}>
                        {moment(new Date(data?.status_time)).format(
                          'MMMM Do YYYY, h:mm a'
                        )}
                      </CommonSubText>
                      {item?.status_name !== 'OP' &&
                        item?.status_name !== 'OM' &&
                        item?.status_name !== 'PPF' && (
                          <CommonSubText opacity={2}>
                            {data?.status_location}
                          </CommonSubText>
                        )}
                    </Timeline.Item>
                  ))}
              </React.Fragment>
            ))}
      </Timeline>
    </>
  );
};
export default OrderTracker;
