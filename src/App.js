import React, { Component } from "react";
import "./app.css";
import "semantic-ui-css/semantic.min.css";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoPlayer />
        <VideoList />
      </div>
    );
  }
}

export default App;
