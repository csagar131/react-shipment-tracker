import React, { useState } from 'react';
import { message } from 'antd';
export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    err: null,
  });
  const [trackingId, setTrackingId] = useState(null);
  const [isMultiple, setIsMultiple] = useState(false);
  const [input, setInput] = useState(null);

  const validateCaptcha = () => {
    return new Promise((res, rej) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute('6LeYEdkaAAAAABUy8w_OYBanvjze8wFP6uw-1TOX', {
            action: 'submit',
          })
          .then((token) => {
            return res(token);
          })
          .catch((err) => rej(err));
      });
    });
  };
  const fetchData = async (value) => {
    setState({
      ...state,
      data: null,
      loading: true,
    });
    const response = await fetch(
      `https://cfapi.pickrr.com/plugins/tracking/?tracking_id=${value}`
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
