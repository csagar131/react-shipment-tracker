import React, { useState, useEffect } from "react";
import { notification } from "antd";
import { useHistory } from "react-router-dom";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const history = useHistory();
  const [state, setState] = useState({
    loading: false,
    data: null,
    err: null,
  });
  const [trackingId, setTrackingId] = useState(null);
  const [searchBy, setSearchBy] = useState("tracking_id");
  const [isMultiple, setIsMultiple] = useState(false);
  const [input, setInput] = useState(null);
  //const [brandData, setBrandData] = useState({});
  const [brandDataState, setBrandDataState] = useState({
    brandLoading: false,
    brandData: {},
    brandErr: null,
  });

  useEffect(() => {
    history.location.search.split("=")[0].substr(1) &&
      setSearchBy(history.location.search.split("=")[0].substr(1));
  }, [history, setSearchBy]);

  // const validateCaptcha = () => {
  //   return new Promise((res, rej) => {
  //     window.grecaptcha.ready(() => {
  //       window.grecaptcha
  //         .execute('6LeYEdkaAAAAABUy8w_OYBanvjze8wFP6uw-1TOX', {
  //           action: 'submit',
  //         })
  //         .then((token) => {
  //           return res(token);
  //         })
  //         .catch((err) => rej(err));
  //     });
  //   });
  // };
  const fetchData = async (value) => {
    const splitMultipleTrackingId = value.split(",");
    const brandTrackingId = splitMultipleTrackingId[0];

    setBrandDataState({
      ...state,
      brandData: {},
      brandLoading: true,
    });

    // const brandingResponse = await fetch(
    //   `https://async.pickrr.com/track/check/branded/client/?domain=${window?.location?.host}&${searchBy}=${brandTrackingId}`
    // );

    const brandingResponse = await fetch(
      `https://async.pickrr.com/track/check/branded/client/?domain=${"unniyarcha.pickrr.com"}&tracking_id=${brandTrackingId}`
    );

    const brandDataJson = await brandingResponse.json();

    if (brandDataJson?.err) {
      if (brandDataJson?.err !== "Tracking Id not found") {
        notification.error({
          message: brandDataJson?.err,
        });
      }
      setBrandDataState({
        brandLoading: false,
        brandData: brandDataJson.res,
        brandErr: brandDataJson,
      });
      setState({
        loading: false,
        data: null,
        err: null,
      });
    } else {
      setBrandDataState({
        brandData: brandDataJson.res,
        brandLoading: false,
        brandErr: null,
      });
    }

    if (brandDataJson?.res && !brandDataJson.err) {
      setState({
        ...state,
        data: null,
        loading: true,
      });

      const response = await fetch(
        `https://cfapi.pickrr.com/plugins/tracking/?${searchBy}=${value}`
      );
      const json = await response.json();

      if (json.err) {
        setState({
          loading: false,
          data: null,
          err: json,
        });
      } else {
        if (json.response_list) {
          setIsMultiple(true);
        } else {
          setIsMultiple(false);
        }
        setState({
          data: json,
          loading: false,
          err: null,
        });
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        state,
        setState,
        trackingId,
        setTrackingId,
        isMultiple,
        setIsMultiple,
        fetchData,
        input,
        setInput,
        brandDataState,
        setBrandDataState,
        searchBy,
        setSearchBy,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
