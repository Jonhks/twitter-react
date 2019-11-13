import React from 'react';
import twitterLogo from '../../assets/img/twitter-logo.png'
import './Header.scss'

export default () => {
  return (
    <div className="header">
      <img src={twitterLogo} alt="Tweets Simulator"/>
      <h1>Twitter Simulator</h1>
    </div>
  )
}