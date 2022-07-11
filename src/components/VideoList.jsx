import React, { Component } from "react";
import { connect } from "react-redux";
import { reproduzVideo } from "../store/actions/reproduz-video";
import { Dimmer, Loader } from "semantic-ui-react";

class VideoList extends Component {
  renderVideo(video) {
    return (
      <div className="video-list" key={video.etag}>
        <ul>
          <li id="playvideo" onClick={() => this.props.reproduz(video)}>
            <img src={video.snippet.thumbnails.default.url} alt="" />
            <div>
              <p>{video.snippet.title}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="video-list" id="clik-video">
        {this.props.carregando && (
          <Dimmer active inverted>
            <Loader size="medium">Loading</Loader>
          </Dimmer>
        )}

        {this.props.videos.map((video) => {
          // console.log("meu video ==>", video);
          return this.renderVideo(video);
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reproduz: (video) => dispatch(reproduzVideo(video)),
  };
};

const mapStateToPros = (state) => {
  return {
    videos: state.busca.videos,
    carregando: state.busca.carregando,
    erro: state.busca.erro,
  };
};
export default connect(mapStateToPros, mapDispatchToProps)(VideoList);
