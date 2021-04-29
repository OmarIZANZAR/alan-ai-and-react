import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanBtnContainer = useRef();

  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: '168bdb9dfdf4fae8b0f00d8a275b61172e956eca572e1d8b807a3e2338fdd0dc/stage',
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
