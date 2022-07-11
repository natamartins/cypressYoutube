import React from "react";
import { connect } from "react-redux";
import { Embed, Advertisement } from "semantic-ui-react";

const VideoPlayer = (props) => {
  return (
    <div className="video-player" id="video-play">
      {!props.video.id && (
        <div>
          <Advertisement
          id='teste1'
            style={{ height: "433px" }}
            unit="top banner"
            test="Escolha um video para reproduzir"
          />
        </div>
      )}
      {props.video.id && (
        <div className="telaPlayer">
          <Embed
          className="agoraVai"
            id={props.video.id.videoId}
            source="youtube"
            placeholder="https://img.freepik.com/vetores-gratis/design-de-modelo-moderno-de-player-de-video-branco-estilo-simples_1017-25480.jpg"
          />
          <p>{props.video.snippet.title}</p>
          <p>{props.video.snippet.description}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    video: state.reproduz.video,
  };
};

export default connect(mapStateToPros, null)(VideoPlayer);
