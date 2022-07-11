import React, { Component } from "react";
import { connect } from "react-redux";
import { buscaVideo } from "../store/actions/busca-video";
import { Input, Segment } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.props.buscaVideo("fifa");
  }

  search = (e) => {
    // console.log('E.KEYCODE ==> ', e.keyCode)
    if (e.keyCode === 13) {
      const termo = e.target.value;
      this.props.buscaVideo(termo);
    }
  };

  render() {
    return (
      <div className="search-bar">
        <Segment className="segment">
          <Input
            id="search-bar"
            placeholder="Search..."
            size="large"
            onKeyDown={(e) => this.search(e)}
          />
        </Segment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buscaVideo: (termo) => dispatch(buscaVideo(termo)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
