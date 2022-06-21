import React, { useState } from "react";
import { Timeline } from "antd";
import moment from "moment";
import {
  CheckCircleFilled,
  CarFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { CheckOrderStatus, checkTrackingStatus } from "../OrderDetails/utils";
import { SmallerText, CommonSubText } from "../UIElements";
import { CustomTimeline } from "./style";

const OrderTracker = ({ data }) => {
  const [showMoreTimeline, setShowMoreTimeline] = useState(false);

  const getDot = (status) => {
    if (status === "OP")
      return (
        <CloseCircleFilled
          style={{
            fontSize: "14px",
            borderRadius: "50%",
            backgroundColor: "#158A2A",
            color: "#158A2A",
            position: "relative",
            top: "-7px",
            left: "-5px",
          }}
        />
      );

    if (status === "DL")
      return (
        <CloseCircleFilled
          style={{
            fontSize: "14px",
            borderRadius: "50%",
            backgroundColor: "#158A2A",
            color: "#158A2A",
            position: "relative",
            top: "-7px",
            left: "-5px",
          }}
        />
      );
    if (status === "OO")
      return (
        <CloseCircleFilled
          style={{
            fontSize: "16px",
            color: "#158A2A",
            position: "relative",
            top: "-7px",
            left: "-5px",
          }}
        />
      );
    if (status === "OC")
      return (
        <CloseCircleFilled
          style={{
            fontSize: "14px",
            borderRadius: "50%",
            backgroundColor: "#FA5357",
            color: "#FA5357",
            position: "relative",
            top: "-7px",
            left: "-5px",
          }}
        />
      );
    if (status === "NDR")
      return (
        <ExclamationCircleFilled
          style={{
            fontSize: "16px",
            color: "#EF7E00",
            backgroundColor: "#EF7E00",
            borderRadius: "50%",
            position: "relative",
            top: "-7px",
            left: "-5px",
          }}
        />
      );
  };
  const getColor = (status) => {
    if (status === "OC" || (status && status.includes("RT"))) return "#FA5357";
  };

  return (
    <>
      <CustomTimeline style={{ marginTop: "20px" }}>
        {data &&
          data.track_arr &&
          data.track_arr[0] &&
          Object.keys(data.track_arr[0]).length &&
          Array.from(data.track_arr).map((item, index) => (
            <React.Fragment key={item?.status_name + index}>
              { item?.status_array?.length > 1 ? (item?.status_array.map((statusItem, index) => (
                <div key={index + item?.status_name} onClick={() => {
                  console.log("its getting hrer");
                  
                  }
                  }>
                  {checkTrackingStatus(statusItem?.status_name) && (
                    <>
                      <Timeline.Item
                        dot={getDot(statusItem?.status_name)}
                        key={statusItem?.status_body + index}
                        color={getColor(statusItem?.status_name)}
                        // onClick={() => setShowMoreTimeline(!showMoreTimeline)}
                      >
                        <h1>{}</h1>
                        <SmallerText size={2} style={{ fontWeight: "bold" }}>
                          {/* {window.location.host === 'oziva.pickrr.com'
                          ? data && CheckOrderStatus(item.status_name)
                          : data?.status_body} */}
                          {statusItem && statusItem?.status_body}
                        </SmallerText>
                        <CommonSubText
                          opacity={2}
                          style={{ marginBottom: "0" }}
                        >
                          {moment(new Date(statusItem?.status_time)).format(
                            "MMMM Do YYYY, h:mm a"
                          )}
                        </CommonSubText>
                        {item?.status_name !== "OP" &&
                          item?.status_name !== "OM" &&
                          item?.status_name !== "PPF" && (
                            <CommonSubText opacity={2}>
                              {statusItem?.status_location}
                            </CommonSubText>
                          )}
                      </Timeline.Item>
                    </>
                  )}
                </div>
              ))) : (checkTrackingStatus(item?.status_name) && (
                <>
                  <Timeline.Item
                    dot={getDot(item?.status_array[0]?.status_name)}
                    key={data?.status_body + index}
                    color={getColor(item?.status_name)}
                  >
                    <SmallerText size={2} style={{ fontWeight: "bold" }}>
                      {/* {window.location.host === 'oziva.pickrr.com'
                      ? data && CheckOrderStatus(item.status_name)
                      : data?.status_body} */}
                      {data && item.status_array[0].status_body}
                    </SmallerText>
                    <CommonSubText
                      opacity={2}
                      style={{ marginBottom: "0" }}
                    >
                      {moment(new Date(item?.status_array[0]?.status_time)).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    </CommonSubText>
                    {item?.status_name !== "OP" &&
                      item?.status_name !== "OM" &&
                      item?.status_name !== "PPF" && (
                        <CommonSubText opacity={2}>
                          {item?.status_array[0]?.status_location}
                        </CommonSubText>
                      )}
                  </Timeline.Item>
                </>
              ))}
            </React.Fragment>
          ))}
      </CustomTimeline>
    </>
  );
};
export default OrderTracker;
