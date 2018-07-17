import * as React from 'react';
import Data from '../emojis';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Header extends React.Component {

  render() {

    return (
        <h1>Emoji translator {Data[getRandomInt(Data.length)].emoji}</h1>
    );
  }
}

export default Header;
