import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AudioPlayer
          autoPlay
          src="http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Queen/Queen%20'All%20Dead,%20All%20Dead'.mp3"
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </header>
    </div>
  );
}

export default App;
