import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanBtnContainer = useRef();

  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: process.env.REACT_APP_ALAN_AI_KEY,
      rootEl: alanBtnContainer.current,
      onConnectionStatus: async function(status) {
        if (status === 'authorized') {
          alanBtnInstance.playText('Hey, this is Alan');
          await alanBtnInstance.activate();
        }else {
          alanBtnInstance.playText('this AI is expired');
        }
      },
    })
  }, []);

  return <div className="App">
    <header className="App-header">
      <ul>
        <li>Click the Alan button to talk if you don't know where to start, ask alan what can it do.</li>
      </ul>
    </header>
    <div ref={alanBtnContainer}></div>
  </div>;
}

export default App;
