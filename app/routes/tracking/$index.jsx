import React, { useContext, useState, useEffect} from "react";
import { useLoaderData } from "remix";
import { getTrackingDetails } from "~/utils/server.query";
import { CustomInput, CustomButton, Container } from "~/components/UIElements";
import { MainContainer, Title } from "./style";
import OrderDetails from "~/components/OrderDetails";
import { Col, notification, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import FooterDetails from "~/components/FooterDetails";
import SellerProductDetails from "~/components/SellerProductDetails";
import DataContext from "~/context/data-context";
// import Lottie from 'react-lottie';
import carLoader from "~/components/LottieAnimation/CarLoader.json";

export const loader = async ({ params }) => {
  const trackingId = params.index
  try {
    const data = await getTrackingDetails(trackingId);
    return {data, trackingId};
  } catch (error) {
    return error;
  }
};

const loaderOptions = {
  loop: true,
  autoplay: true,
  animationData: carLoader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function TrackingDetails() {
  const loaderData = useLoaderData();
  const context = useContext(DataContext);

  const [data, setData] = useState({
    ...loaderData.data,
  });
  const [trackingId, setTrackingId] = useState(loaderData.trackingId);
  const [isError, setIsError] = useState({
    errorStatus: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { other: brandUIData } = context?.sellerData;

  const footerData = context?.sellerData?.other?.footer;

  const isMultiOrder = data?.response_list ? true : false;

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const handleClick = async () => {
    if (!trackingId) {
      notification.error({ message: "Please enter Tracking ID" });
      return;
    } else {
      setIsLoading(true);
      const data = await getTrackingDetails(trackingId);
      setData({ ...data });
      setIsLoading(false);
    }
  };

  // const handleEnterKey = (e) => {
  //   console.log("here");
  //   if (e.keyCode === 13 || e.which === 13) {
  //     e.target.blur();
  //     navigate(`/tracking/${trackingId}`, { replace: true });
  //   }
  // };

  useEffect(() => {
    if (data?.err) {
      setIsError({ errorStatus: true, message: data.err });
    } else {
      setIsError({ errorStatus: false, message: "" });
    }
  }, [data]);

  return (
    <>
      <Container>
        <div style={{ padding: `${isMobileDevice ? "8px" : ""}` }}>
          <Title>Order Tracking Details</Title>
          <Row gutter={[44, 18]}>
            <Col xl={18} lg={18} sm={24} xs={24}>
              <CustomInput
                placeholder="Enter Tracking ID (Comma separated if multiple)"
                onChange={(e) => {
                  setTrackingId(e.target.value);
                }}
                enterbutton="Track"
                size="large"
                // onKeyDown={handleEnterKey}
                value={trackingId}
                allowClear
              />
            </Col>
            <Col xl={6} lg={6} sm={24} xs={24}>
              <CustomButton type="primary" onClick={handleClick}>
                Track Order
              </CustomButton>
            </Col>
          </Row>
          {isError.errorStatus && (
            <div style={{ color: "#FF0006", marginTop: "8px" }}>
              {isError.message}
            </div>
          )}
          <div>
            <img
              src={brandUIData?.banner.url}
              alt="brand-img"
              style={{
                margin: "16px 0",
                border: "1px solid tranparent",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          </div>
        </div>

        {isLoading ? (
          // <Lottie options={loaderOptions} height={250} width={250} />
          <div>Loading...</div>
        ) : (
          !data?.err && (
            <div style={{ marginBottom: "30px" }}>
              {isMultiOrder ? (
                data?.response_list?.map((trackingData, index) => {
                  const {
                    courier_used,
                    status,
                    order_created_at,
                    client_order_id,
                    edd_stamp,
                    last_update_from_order_ms,
                    item_list,
                    track_arr,
                    is_cod,
                  } = trackingData;

                  return (
                    <MainContainer style={{ margin: "16px 0" }} key={index}>
                      <OrderDetails
                        courier={courier_used}
                        status={status?.current_status_body}
                        statusType={status?.current_status_type}
                        orderDate={order_created_at}
                        orderId={client_order_id}
                        expectedDelivery={edd_stamp}
                        lastUpdate={last_update_from_order_ms}
                        isMultiOrder={isMultiOrder}
                        itemList={item_list}
                        trackArr={track_arr}
                        is_cod={is_cod}
                        resData={trackingData}
                      />
                    </MainContainer>
                  );
                })
              ) : (
                <MainContainer style={{ margin: "16px 0" }}>
                  <OrderDetails
                    courier={data?.courier_used}
                    status={data?.status?.current_status_body}
                    statusType={data?.status?.current_status_type}
                    orderDate={data?.order_created_at}
                    orderId={data?.client_order_id}
                    expectedDelivery={data?.edd_stamp}
                    lastUpdate={data?.last_update_from_order_ms}
                    isMultiOrder={isMultiOrder}
                    itemList={data?.item_list}
                    trackArr={data?.track_arr}
                    is_cod={data?.is_cod}
                    resData={data}
                  />
                </MainContainer>
              )}
            </div>
          )
        )}

        <MainContainer style={{ padding: "0", background: "transparent" }}>
          {brandUIData && brandUIData?.product_details.length > 0 && (
            <SellerProductDetails brandUIData={brandUIData} />
          )}
          <FooterDetails footerData={footerData} context={context} />
        </MainContainer>
      </Container>
    </>
  );
}
export default TrackingDetails;
