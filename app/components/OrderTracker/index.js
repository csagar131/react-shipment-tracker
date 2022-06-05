import React, {useState} from "react";
import { Timeline } from "antd";
import moment from "moment";
import {
  CheckCircleFilled,
  CarFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { CheckOrderStatus } from "../OrderDetails/utils";
import { SmallerText, CommonSubText } from "../UIElements";
import { CustomTimeline } from "./style";

const OrderTracker = ({ data }) => {

  const [showMore , setShowMore] = useState(false);

  const getDot = (status) => {
    if (status === "DL")
      return (
        <CloseCircleFilled style={{ fontSize: "16px", borderRadius : '50%',backgroundColor : '#158A2A', color: "#158A2A", position : 'relative', top : '-5px', left : '-5px' }} />
      );
    if (status === "OO")
      return <CloseCircleFilled style={{ fontSize: "16px", color: "#158A2A",  position : 'relative', top : '-5px', left : '-5px' }} />;
    if (status === "OC")
      return <CloseCircleFilled style={{ fontSize: "16px", borderRadius : '50%',backgroundColor : '#FA5357', color: "#FA5357", position : 'relative', top : '-5px', left : '-5px' }} />;
    if (status === "NDR")
      return (
        <ExclamationCircleFilled
          style={{ fontSize: "16px", color: "#EF7E00", backgroundColor : '#EF7E00',borderRadius : '50%',   position : 'relative', top : '-5px', left : '-5px' }}
        />
      );
  };
  const getColor = (status) => {
    if (status === "OC" || (status && status.includes("RT"))) return "red";
  };

  return (
    <>
      <CustomTimeline style={{ marginTop: "20px" }}>
        {data &&
          data.track_arr &&
          data.track_arr[0] &&
          Object.keys(data.track_arr[0]).length &&
          Array.from(data.track_arr)
            .map((item, index) => (
              <React.Fragment key={item?.status_name + index}>
                {Array.from(item?.status_array)
                  .map((data, index) => (
                    <Timeline.Item
                      dot={getDot(item?.status_name)}
                      key={data?.status_body + index}
                      color={getColor(item?.status_name)}
                    >
                      <SmallerText size={2} style={{ fontWeight: "bold" }}>
                        {/* {window.location.host === 'oziva.pickrr.com'
                          ? data && CheckOrderStatus(item.status_name)
                          : data?.status_body} */}
                        {data && data?.status_body}
                      </SmallerText>
                      <CommonSubText opacity={2} style={{ marginBottom: "0" }}>
                        {moment(new Date(data?.status_time)).format(
                          "MMMM Do YYYY, h:mm a"
                        )}
                      </CommonSubText>
                      {item?.status_name !== "OP" &&
                        item?.status_name !== "OM" &&
                        item?.status_name !== "PPF" && (
                          <CommonSubText opacity={2}>
                            {data?.status_location}
                          </CommonSubText>
                        )}
                    </Timeline.Item>
                  ))}
              </React.Fragment>
            ))}
      </CustomTimeline>
    </>
  );
};
export default OrderTracker;
