import React from "react";
import "./App.css";
import {  
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Search from './Search/Search'

function BlogPost() {
	let { slug, singh } = useParams();
	return <div>Now showing post {slug} & {singh}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
	  	<Switch>
		  <Route path="/search/:type/:param" component={Search}/>
		</Switch>

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
