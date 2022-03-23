import React, { useState, useEffect } from 'react';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const history = useHistory();
  const userPk = {
    'shreelifestyle.pickrr.com': '166737',
    'localhost:3000': '271069',
    'scooboo.pickrr.com':'145002',
    'grow91.pickrr.com':'271069',
    'bellavita.pickrr.com':'137422',
    'scooboo.netlify.com':'145002',
    'grow91.netlify.com':'271069',
    'bellavita.netlify.com':'137422',
    'netlify.com':'145002'
  };
  const [state, setState] = useState({
    loading: false,
    data: null,
    err: null,
  });
  const [trackingId, setTrackingId] = useState(null);
  const [searchBy, setSearchBy] = useState(
    (history.location.search.split('=')[0].substr(1) &&
      history.location.search.split('=')[0].substr(1)) ||
      'tracking_id'
  );
  const [isMultiple, setIsMultiple] = useState(false);
  const [input, setInput] = useState(null);
  //const [brandData, setBrandData] = useState({});
  const [brandDataState, setBrandDataState] = useState({
    brandLoading: false,
    bandGet: false,
    brandData: {},
    brandErr: null,
  });

  useEffect(() => {
    history.location.search.split('=')[0].length &&
      history.location.search.split('=')[0].substr(1) &&
      setSearchBy(history.location.search.split('=')[0].substr(1));
  }, [history, setSearchBy]);

  useEffect(() => {
    //to check branded is active or not
    if (
      brandDataState?.brandData &&
      Object.keys(brandDataState?.brandData).length &&
      !brandDataState?.brandData.is_active
    ) {
      throw new Error('blocked');
    }
  }, [brandDataState]);
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
    const splitMultipleTrackingId = value.split(',');
    const brandTrackingId = splitMultipleTrackingId[0];
    let brandedAvailablity = true;
    // const brandingResponse = await fetch(
    //   `https://async.pickrr.com/track/check/branded/client/?domain=${window?.location?.host}&${searchBy}=${brandTrackingId}`
    // );

    let brandingResponse = {};
    // to check domain is same don't reload whole app
    if (
      !brandDataState.bandGet ||
      !(
        brandDataState.brandData.website && brandDataState.brandData.website
      ) === window.location.host
      // 'lifestyle.netlify.app'
      //  window.location.host
    ) {
      setBrandDataState({
        ...state,
        brandData: {},
        brandLoading: true,
      });
      // if search type is order id this endpoint always gives err or search type tracking id trim id from url and pass in endpoint.
      if (
        searchBy === 'client_order_id' ||
        !decodeURI(history.location.search.split('=')[1])
      ) {
        brandingResponse = await fetch(
          `https://async.pickrr.com/track/check/branded/client/?domain=${window.location.host}&page_details=client`
        );
      } else {
        brandingResponse = await fetch(
          `https://async.pickrr.com/track/check/branded/client/?domain=${window.location.host}&${searchBy}=${brandTrackingId}`
        );
      }

      const brandDataJson = await brandingResponse.json();
      // if (searchBy === 'tracking_id' && brandDataJson?.err) {
      //check for branded is available or not
      if (brandDataJson?.err !== 'Tracking Id not found') {
        notification.error({
          message: brandDataJson?.err,
        });
        setBrandDataState({
          brandErr: brandDataJson?.err,
        });
        brandedAvailablity = false;
      }
      // check for
      // if (
      //   !decodeURI(history.location.search.split('=')[1]) ||
      //   decodeURI(history.location.search.split('=')[1]) === 'tracking_id'
      // ) {
      //   setBrandDataState({
      //     brandLoading: false,
      //     brandData: brandDataJson.res,
      //     brandErr: brandDataJson,
      //     bandGet: true,
      //   });
      // } else {
      setBrandDataState({
        brandLoading: false,
        brandData: brandDataJson.res,
        bandGet: true,
      });
      // }

      setState({
        loading: false,
        data: null,
        err: null,
      });
      // } else {
      //   setBrandDataState({
      //     brandData: brandDataJson.res,
      //     brandLoading: false,
      //     brandErr: null,
      //     bandGet: true,
      //   });
      // }
    }

    if (
      //   (brandDataJson?.res && !brandDataJson.err) ||
      //   !decodeURI(history.location.search.split('=')[1])
      (history.location.search.length &&
        decodeURI(history.location.search.split('=')[1])) ||
      (window.location.hash !== '#/' && brandedAvailablity)
    ) {
      setState({
        ...state,
        data: null,
        loading: true,
      });
      if (
        // history.location.search.split('=')[0].substr(1) === 'client_order_id'
        searchBy === 'client_order_id'
      ) {
        value = value
          .split(',')
          // .map((el) => `${el}-PICK-${userPk['shreelifestyle.pickrr.com']}`)
          .map((el) => `${el}-PICK-${userPk[window.location.host]}`)
          .join(',');
      } else if (value.includes('PICK')) {
        value = value.split('-')[0];
      }

      // const response = await fetch(
      //   `https://cfapi.pickrr.com/plugins/tracking/?${history.location.search
      //     .split('=')[0]
      //     .substr(1)}=${value}`
      // );
      const response = await fetch(
        `https://cfapi.pickrr.com/plugins/tracking/?${searchBy}=${encodeURIComponent(
          value
        )}`
      );
      const json = await response.json();
      if (json?.err || json?.response_list?.length == 0) {
        setState({
          loading: false,
          data: null,
          err: json,
        });
      } else if (
        !decodeURI(history.location.search.split('=')[1]) &&
        history.location.hash === '/#'
      ) {
        console.log(!history.location.search.split('=')[1], 'opopo');
        setState({
          loading: false,
          data: null,
          err: '',
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
