import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainComponent from './components/MainComponent';

import { DataProvider } from './context/dataProvider';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  const [isHomePage, setisHomePage] = useState(true);

  useEffect(() => {
    decodeURI(history.location.search.split('=')[1]) !== 'undefined'
      ? setisHomePage(false)
      : setisHomePage(true);
  }, [setisHomePage, history.location.search]);

  useEffect(() => {
    return history.listen((location) => {
      decodeURI(location.search.split('=')[1]) !== 'undefined'
        ? setisHomePage(false)
        : setisHomePage(true);
    });
  }, [history]);

  // function getFaviconEl() {
  //   return document.getElementById('favicon');
  // }

  // const handleFavIcon = () => {
  //   const favicon = getFaviconEl();
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  //   ) {
  //     favicon.href =
  //       'https://res.cloudinary.com/pickrr/image/upload/v1617194337/logo/White_i3pywj.svg';
  //   } else {
  //     favicon.href =
  //       'https://res.cloudinary.com/pickrr/image/upload/v1617194369/logo/Blue_tat2ry.svg';
  //   }
  // };

  // useEffect(() => {
  //   handleFavIcon();
  // }, []);

  return (
    <>
    <DataProvider>
      {!isHomePage ? (
        <Route exact path="/" component={MainComponent} />
      ) : (
        <Route exact path="/" component={HomePage} />
      )}
    </DataProvider>
    </>
  );
}

export default App;
